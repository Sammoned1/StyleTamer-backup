const Router = require('express')
const router = new Router() // Создание объекта роутера
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')
const errorHandlingMiddleware = require('../middleware/ErrorHandlingMiddlware')

// Описание методов роутера

router.post('/registration', userController.registration) // Регистрация
router.post('/login', userController.login) // Вход
router.get('/auth', authMiddleware, userController.check) // Получения статуса авторизации пользователя



module.exports = router