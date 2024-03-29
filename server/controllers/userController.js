const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

const refreshJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '7d'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        if (!email || !password) {
            return next(ApiError.internal('Пожалуйста, заполние поля для ввода'))
        }
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('Неверный логин или пароль'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Неверный логин или пароль'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    // req - строка запроса (все что после основной ссылки)
    // res - ответ от сервера

    async check(req, res, next) {
        try {
            const token = generateJwt(req.user.id, req.user.email, req.user.role)
            return res.json({token})
        } catch (e) {
            // console.log('-------------------' + e + '-------------------')
            return next(ApiError.unauthorized('Пользователь не авторизован'))
        }
    }
}

module.exports = new UserController()