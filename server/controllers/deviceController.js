const uuid = require('uuid')
const path = require('path')
const {Device, DeviceInfo, BasketDevice, DevicePhoto} = require('../models/models')
const ApiError = require('../error/ApiError')

class DeviceController {
    // async appendPhoto(req, res, next) {
    //     const {photoList} = req.body
    //
    // }

    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info, gender, fileList, mainFile} = req.body
            // const {img} = req.files
            fileList.forEach(file => {
                let fileName = uuid.v4() + '.jpg' // Функция uuid.v4 генерирует рандомный айди
                // file.mv(path.resolve(__dirname, '..', 'static', fileName))
                if (file === mainFile){
                    const photo = DevicePhoto.create({name: fileName, main: true, deviceId: 32})
                }
                else {
                    const photo = DevicePhoto.create({name: fileName, deviceId: 32})
                }
            })
            return res.json(fileList)
            // Перемещение файла с заданным именем в нужную нам папку
            // Функция resolve адаптирует путь под операционную систему
            //
            // const device = await Device.create({name, price, brandId, typeId, img: fileName, gender}) // Создание нового девайса на сервере
            //
            // if (info) {
            //     info = JSON.parse(info) // Превращение строки в объект
            //     info.forEach(i =>
            //         DeviceInfo.create({
            //             title: i.title,
            //             description: i.description,
            //             deviceId: device.id
            //         })
            //     )
            // }
            // return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {brandId, typeId, gender, limit, page} = req.query // Получение бренда и типа из строки запроса
        page = page || 1
        limit = limit || 16
        let offset = page * limit - limit
        let devices
        // return res.json(gender)
        if (!gender && !typeId && !brandId) {
            devices = await Device.findAndCountAll({limit, offset})
        }
        if (gender && !typeId && !brandId) {
            devices = await Device.findAndCountAll({where: {gender}, limit, offset})
        }

        if (gender && brandId && !typeId) {
            devices = await Device.findAndCountAll({where: {gender, brandId}, limit, offset})
        }
        if (gender && !brandId && typeId) {
            devices = await Device.findAndCountAll({where: {gender, typeId}, limit, offset})
        }
        if (gender && brandId && typeId) {
            devices = await Device.findAndCountAll({where: {gender, brandId, typeId}, limit, offset})
        }
        if (!gender && brandId && !typeId) {
            devices = await Device.findAndCountAll({where: {brandId}, limit, offset})
        }
        if (!gender && !brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset})
        }
        if (!gender && brandId && typeId) {
            devices = await Device.findAndCountAll({where: {brandId, typeId}, limit, offset})
        }
        return res.json(devices)
    }

    async getOne(req, res) {
        const {id} = req.params
        const device = await Device.findOne(
            {
                where: {id},
                // include: [{model: DeviceInfo, as: 'info'}] // Подгрузка доп характеристик
            },
        )
        return res.json(device)
    }

    async remove(req, res) {
        const {id} = req.body.device
        const deviceId = id
        const device = await BasketDevice.destroy({
            where: {deviceId}
        })
        const removableDevice = await Device.destroy({
            where: {id}
        })
        res.json(removableDevice)
    }
}

module.exports = new DeviceController()