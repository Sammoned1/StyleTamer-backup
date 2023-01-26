const Router = require('express')
const router = new Router() // Создание объекта роутера
const typeController = require('../controllers/typeController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')


// Описание методов роутера

router.post('/', checkRoleMiddleware('ADMIN'), typeController.create) // Метод для создания типа
router.get('/', typeController.getAll) // Получение всех типов


module.exports = router