const Router = require('express')
const router = new Router() // Создание объекта роутера
const deviceRouter = require('./deviceRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')
const basketRouter = require('./basketRouter')


// Добавление подроутеров к основному

router.use('/user', userRouter)
router.use('/brand', brandRouter)
router.use('/type', typeRouter)
router.use('/device', deviceRouter)
router.use('/basket', basketRouter)


module.exports = router