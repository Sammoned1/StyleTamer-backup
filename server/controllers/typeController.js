const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
    async create(req, res) {
        const {name} = req.body // Получение имени из запроса
        const type = await Type.create({name}) // Создание типа
        return res.json(type)
    }

    async getAll(req, res) {
        const types = await Type.findAll() // Получение всех типов имеющихся в бд
        return res.json(types)
    }
}

module.exports = new TypeController()