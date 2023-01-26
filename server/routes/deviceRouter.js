const Router = require('express')
const router = new Router() // Создание объекта роутера
const deviceController = require('../controllers/deviceController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')
const authMiddleware = require('../middleware/authMiddleware')
// Описание методов роутера

router.post('/', checkRoleMiddleware('ADMIN'), deviceController.create) // Метод для создания девайса
router.get('/', deviceController.getAll) // Получение всех девайсов
router.get('/:id', deviceController.getOne) // Получение конкретного девайса
router.post('/delete', authMiddleware, checkRoleMiddleware('ADMIN'), deviceController.remove)


module.exports = router