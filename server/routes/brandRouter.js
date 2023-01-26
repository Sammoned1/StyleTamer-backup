const Router = require('express')
const router = new Router() // Создание объекта роутера
const brandController = require('../controllers/brandController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

// Описание методов роутера

router.post('/', checkRoleMiddleware('ADMIN'), brandController.create) // Метод для создания бренда
router.get('/', brandController.getAll) // Получение всех брендов


module.exports = router