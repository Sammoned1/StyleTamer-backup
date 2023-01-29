const uuid = require('uuid')
const path = require('path')
const {Device, DeviceInfo, BasketDevice, DevicePhoto} = require('../models/models')
const ApiError = require('../error/ApiError')

class DeviceController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info, gender, fileList, mainFile} = req.body
            let files = [];
            let fileKeys = Object.keys(req.files);
            fileKeys.forEach(key => {
                files.push(req.files[key]);
            });

            const device = await Device.create({name, price, brandId, typeId, gender})

            files.forEach(file => {
                let fileName = uuid.v4() + '.jpg' // Функция uuid.v4 генерирует рандомный айди
                file.mv(path.resolve(__dirname, '..', 'static', fileName))
                if (file.name === mainFile) {
                    const photo = DevicePhoto.create({name: fileName, main: true, deviceId: device.id})
                } else {
                    const photo = DevicePhoto.create({name: fileName, deviceId: device.id})
                }
            })
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
            return res.json(device)
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
            devices = await Device.findAndCountAll({
                include: {model: DevicePhoto, required: true, where: {main: true}},
                limit,
                offset
            })
        }
        if (gender && !typeId && !brandId) {
            devices = await Device.findAndCountAll({
                include: {model: DevicePhoto, required: true, where: {main: true}},
                where: {gender},
                limit,
                offset
            })
        }

        if (gender && brandId && !typeId) {
            devices = await Device.findAndCountAll({
                include: {model: DevicePhoto, required: true, where: {main: true}},
                where: {gender, brandId},
                limit,
                offset
            })
        }
        if (gender && !brandId && typeId) {
            devices = await Device.findAndCountAll({
                include: {model: DevicePhoto, required: true, where: {main: true}},
                where: {gender, typeId},
                limit,
                offset
            })
        }
        if (gender && brandId && typeId) {
            devices = await Device.findAndCountAll({
                include: {model: DevicePhoto, required: true, where: {main: true}},
                where: {gender, brandId, typeId},
                limit,
                offset
            })
        }
        if (!gender && brandId && !typeId) {
            devices = await Device.findAndCountAll({
                include: {model: DevicePhoto, required: true, where: {main: true}},
                where: {brandId},
                limit,
                offset
            })
        }
        if (!gender && !brandId && typeId) {
            devices = await Device.findAndCountAll({
                include: {model: DevicePhoto, required: true, where: {main: true}},
                where: {typeId},
                limit,
                offset
            })
        }
        if (!gender && brandId && typeId) {
            devices = await Device.findAndCountAll({
                include: {model: DevicePhoto, required: true, where: {main: true}},
                where: {brandId, typeId},
                limit,
                offset
            })
        }
        return res.json(devices)
    }

    async getOne(req, res) {
        const {id} = req.params
        const device = await Device.findOne({
            where: {id},
            include: {model: DevicePhoto, required: true},
            // include: [{model: DeviceInfo, as: 'info'}] // Подгрузка доп характеристик
        })
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