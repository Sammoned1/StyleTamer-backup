import React, {useContext, useEffect, useMemo, useState} from 'react';
import classes from './BasketItem.module.css'
import {fetchOneDevice} from "../../../http/deviceAPI";
import {Context} from "../../../index";
import {decreaseBasketDevice, increaseBasketDevice, removeBasketDevice} from "../../../http/basketAPI";
import jwt_decode from "jwt-decode";
import {observer} from "mobx-react-lite";
import data from "bootstrap/js/src/dom/data";

const BasketItem = observer(({item, setTotal, total, basket, setBasket}) => {
    const [price, setPrice] = useState(0)
    const [device, setDevice] = useState({})
    const {user} = useContext(Context)
    const token = localStorage.getItem('token')
    const basketId = token ? jwt_decode(token).id : null
    const [count, setCount] = useState(0)
    const [mainDevice, setMainDevice] = useState({})

    useEffect(() => {
        if (user.isAuth) {
            fetchOneDevice(item.deviceId).then(data => {
                setDevice(data)
                setPrice(data.price)
                setCount(item.count)
            })
        }
        // console.log(device)
    }, [])


    useEffect(() => {
        if ('id' in device) {
            device.device_photos.forEach(photo => {
                if (photo.main) {
                    setMainDevice(photo)
                    // console.log(photo)
                }
            })
        }
        console.log(device)
    }, [device])

    const increment = () => {
        increaseBasketDevice({deviceId: device.id, basketId}).then(data => {
            setCount(data.count)
        })
        setTotal(total + device.price)
    }

    const decrement = () => {
        decreaseBasketDevice({deviceId: device.id, basketId}).then(data => {
            if (count > 1) {
                setCount(data.count)
            }
        })
        setTotal(total - device.price)
    }

    const remove = () => {
        removeBasketDevice({deviceId: device.id, basketId}).then(() => {
            setBasket(basket.filter(i => i.deviceId !== device.id))
        })
        setTotal(total - (device.price * count))
    }

    return (
        <div className={classes.basketItem}>
            <img src={process.env.REACT_APP_API_URL + mainDevice.name} className={classes.basketItemPhoto}/>
            <div className={classes.basketItemContent}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div className={classes.basketItemTitle}>{device.name}</div>
                    <div className={classes.deleteItemBtn} onClick={remove}></div>
                </div>
                <div className={classes.basketItemSize}>Размер: S</div>
                <div className={classes.basketItemPrice}>{device.price}</div>
                <div className={classes.basketCountLine}>
                    <div className={classes.basketItemCount}>
                        <div className={classes.basketCountIcon} onClick={decrement}>
                            -
                        </div>
                        {count}
                        <div className={classes.basketCountIcon} onClick={increment}>
                            +
                        </div>
                    </div>
                    <div className={classes.basketItemTotal}>
                        <div className={classes.rubleIcon}>{price * count} р</div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default BasketItem;