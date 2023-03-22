const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    if (req.method === 'OPTIONS') {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1] // Тип токена: bearer ; Токен: asdasdqwdqwd
        console.log(token)
        if (!token) {
            return res.status(401).json({message: 'Токен не определен'})
        }
        req.user = jwt.verify(token, process.env.SECRET_KEY)
        next()
    } catch (e) {
        console.log('error')
        next()
        // console.log('-------------------' + e + '-------------------')
        // return res.status(401).json({message: e})
    }
}