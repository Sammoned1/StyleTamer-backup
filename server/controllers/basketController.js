const {BasketDevice} = require('../models/models')

class BasketController {
    async add(req, res) {
        const {deviceId, basketId} = req.body
        const basketDevice = await BasketDevice.findOne({
            where: {basketId, deviceId}
        })
        if (!basketDevice) {
            const basketDevice = await BasketDevice.create({basketId, deviceId})
            return res.json(basketDevice)
        } else {
            return res.json({message: 'Товар уже в корзине'})
        }
    }

    async increaseDevice(req, res) {
        const {deviceId, basketId} = req.body
        const basketDevice = await BasketDevice.findOne({
            where: {basketId, deviceId}
        })
        basketDevice.count += 1
        await basketDevice.save()
        return res.json(basketDevice)
    }

    async getBasket(req, res) {
        const {id} = req.params
        const basketDevices = await BasketDevice.findAll({
            where: {basketId: id}
        })
        return res.json(basketDevices)
    }

    async removeDevice(req, res) {
        const {basketId, deviceId} = req.body
        const removableDevice = await BasketDevice.destroy({
            where: {basketId, deviceId}
        })
        return res.json(removableDevice)
    }

    async decreaseDevice(req, res) {
        const {deviceId, basketId} = req.body
        const basketDevice = await BasketDevice.findOne({
            where: {basketId, deviceId}
        })
        if (basketDevice.count > 1) {
            basketDevice.count -= 1
            basketDevice.save()
            return res.json(basketDevice)
        }
        else{
            return res.json({message: 'Нельзя уменьшить количество до 0'})
        }
    }
}

module.exports = new BasketController()