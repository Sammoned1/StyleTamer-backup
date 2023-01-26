const Router = require('express')
const router = new Router() // Создание объекта роутера
const basketController = require('../controllers/basketController')
const authMiddleware = require('../middleware/authMiddleware')

// Описание методов роутера

router.post('/', authMiddleware, basketController.add) // Метод для добавления товара в корзину
router.get('/:id', authMiddleware, basketController.getBasket) // Получение конкретной корзины
router.post('/remove', authMiddleware, basketController.removeDevice)
router.post('/decrease', authMiddleware, basketController.decreaseDevice)
router.post('/increase', authMiddleware, basketController.increaseDevice)

module.exports = router