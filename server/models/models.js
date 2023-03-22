const sequelize = require('../db') // Импорт переменной sequelize
const {DataTypes} = require('sequelize') // Импорт класса для описания типов данных в бд

// const Name = sequelize.define('name', {}) - инициализация модели

const User = sequelize.define('user', { // Описание структуры пользователя
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    username: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
})

const Basket = sequelize.define('basket', { // Описание структуры корзины
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const BasketDevice = sequelize.define('basket_device', { // Описание структуры товара в корзине
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    count: {type: DataTypes.INTEGER, defaultValue: 1, allowNull: false}
})

const Device = sequelize.define('device', { // Описание структуры устройства
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    // img: {type: DataTypes.STRING, allowNull: false},
    gender: {type: DataTypes.CHAR}
})

const Type = sequelize.define('type', { // Описание структуры типа устройства
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Brand = sequelize.define('brand', { // Описание структуры бренда устройства
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Rating = sequelize.define('rating', { // Описание структуры рейтинга устройства
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false}
})

const DeviceInfo = sequelize.define('device_info', { // Описание структуры информации об устройстве
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
})

const TypeBrand = sequelize.define('type_brand', { // Промежуточная модель для связи типа и бренда (много ко многим)
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const DevicePhoto = sequelize.define('device_photo', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    main: {type: DataTypes.BOOLEAN, defaultValue: false}
})

User.hasOne(Basket) // Связь 1 к 1
Basket.belongsTo(User) // Связывание корзины и пользователя

User.hasMany(Rating) // Связь 1 к многим
Rating.belongsTo(User) // Связывание рейтинга и пользователя

Basket.hasMany(BasketDevice) // Связь 1 к многим
BasketDevice.belongsTo(Basket) // Связывание устройства корзины и корзине

Type.hasMany(Device) // Связь 1 к многим
Device.belongsTo(Type) // Связывание устройства и типа устройства

Brand.hasMany(Device) // Связь 1 к многим
Device.belongsTo(Type) // Связывание устройства и бренда устройства

Device.hasMany(Rating) // Связь 1 к многим
Rating.belongsTo(Device) // Связывание рейтинга и устройства

Device.hasMany(BasketDevice) // Связь 1 к многим (должно быть hasOne())
BasketDevice.belongsTo(Device) // Связывание устройства корзины и устройства

Device.hasMany(DeviceInfo, {as: 'info'}) // Связь 1 к многим
DeviceInfo.belongsTo(Device) // Связывание Информации об устройстве и устройства

Type.belongsToMany(Brand, {through: TypeBrand}) // Связь много ко многим
Brand.belongsToMany(Type, {through: TypeBrand})

Device.hasMany(DevicePhoto)
DevicePhoto.belongsTo(Device)

module.exports = { // Экспорт созданных моделей для их дальнейшего исплоьзования
    User,
    Basket,
    BasketDevice,
    Device,
    Type,
    Brand,
    Rating,
    TypeBrand,
    DeviceInfo,
    DevicePhoto
}