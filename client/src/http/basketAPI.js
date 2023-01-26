import {$authHost, $host} from "./index";

export const addBasketDevice = async (device) => {
    const {data} = await $authHost.post('api/basket', device)
    return data
}

export const fetchBasket = async (id) => {
    const {data} = await $authHost.get('api/basket/' + id)
    return data
}

export const removeBasketDevice = async (device) => {
    const {data} = await $authHost.post('api/basket/remove', device)
    return data
}

export const decreaseBasketDevice = async (device) => {
    const {data} = await $authHost.post('api/basket/decrease', device)
    return data
}

export const increaseBasketDevice = async (device) => {
    const {data} = await $authHost.post('api/basket/increase', device)
    return data
}