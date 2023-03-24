import {makeAutoObservable} from "mobx";
import classes from './icons.module.css'

export default class DeviceStore {
    constructor() {
        this._genders = [
            {id: 1, name: 'Для неё', icon: classes.woman},
            {id: 2, name: 'Для него', icon: classes.man}
        ]
        this._brands = []
        this._types = []

        this._gender = ''
        this._type = null
        this._brand = null

        this._clothes = []
        this._boots = []
        this._bags = []
        this._jewellery = []
        this._devices = []

        this._page = 1
        this._totalCount = 0
        this._limit = 16

        this._wishList = []
        this._historyList = []

        this._filterTypes2 = [
            {id: 1, name: 'Размер'},
            {id: 2, name: 'Брэнд'}
        ]

        this._filterTypes = [
            // {id: 1, name: 'Бренды', icon: classes.brands, list: this._brands},
            {id: 1, name: 'Одежда', icon: classes.clothes, list: this._clothes},
            {id: 2, name: 'Обувь', icon: classes.boots, list: this._boots},
            {id: 3, name: 'Сумки', icon: classes.bags, list: this._bags},
            {id: 4, name: 'Украшения', icon: classes.jewellery, list: this._jewellery},
        ]

        this._selectedGender = {}
        this._selectedType = {}
        this._selectedOther = {}
        this._selectedBrand = {}

        makeAutoObservable(this)
    }

    setGenders(genders) {
        this._genders = genders
    }

    setTypes(types) {
        this._types = types
    }

    setFilterTypes(filterTypes) {
        this._filterTypes = filterTypes
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedGender(gender) {
        this._selectedGender = gender
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    setSelectedOther(other) {
        this._selectedOther = other
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(totalCount) {
        this._totalCount = totalCount
    }

    setLimit(limit) {
        this._limit = limit
    }

    setGender(gender) {
        this._gender = gender
    }

    setType(type) {
        this._type = type
    }

    setBrand(brand) {
        this._brand = brand
    }

    setWishList(wishList) {
        this._wishList = wishList
    }

    setHistoryList(historyList) {
        this._historyList = historyList
    }

    get types() {
        return this._types
    }

    get filterTypes() {
        return this._filterTypes
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get genders() {
        return this._genders
    }

    get selectedGender() {
        return this._selectedGender
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }

    get selectedOther() {
        return this._selectedOther
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }

    get gender() {
        return this._gender
    }

    get type() {
        return this._type
    }

    get brand() {
        return this._brand
    }

    get wishList() {
        return this._wishList
    }

    get historyList() {
        return this._historyList
    }
}