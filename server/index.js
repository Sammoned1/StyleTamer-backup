require('dotenv').config()

const express = require('express')
const sequelize = require('./db')
const models = require('./models/models') // Импорт моделей
const cors = require('cors') // Импорт функции cors для отправки запросов из браузера
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddlware')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)


// Обработка ошибок, последний Middleware
app.use(errorHandler)


// app.get('/', (req, res)=>{ // 1 Параметр - URL 2 Параметр - Функция callback(request, response)
//     res.status(200).json({message: 'WORKING!!!'}) // Статус 200 - запрос произошел без ошибок
// })

const start = async () => {
    try{
        await sequelize.authenticate() //Установление подключения данных
        await sequelize.sync() // Синхронизация бд со схемой данных
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    }catch (e){
        console.log(e)
    }
}

start().then(null)
