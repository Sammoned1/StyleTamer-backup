import React, {useContext, useEffect, useMemo, useState} from 'react';
import classes from './Basket.module.css'
import BasketItem from "./BasketItem/BasketItem";
import MyButton from "../UI/Buttons/MyButton/MyButton";
import {observer} from "mobx-react-lite";
import jwt_decode from "jwt-decode";
import {fetchBasket} from "../../http/basketAPI";
import {Context} from "../../index";
import {fetchOneDevice} from "../../http/deviceAPI";
import logo from "../Logo/Logo";
import {useLocation} from "react-router-dom";
import {BASKET_ROUTE} from "../../utils/consts";
import data from "bootstrap/js/src/dom/data";

const Basket = observer(() => {
    const [total, setTotal] = useState(0)
    const {user, device} = useContext(Context)
    const [basket, setBasket] = useState([])
    const token = localStorage.getItem('token')
    const userId = token ? jwt_decode(token).id : null

    useEffect(() => {
        fetchBasket(userId).then(data => {
            user.setBasket(data)
            setBasket(data)
        })
    }, [])

    const fetchPrice = () => {
        let price = 0
        if (user.basket.length) {
            user.basket.forEach(item => {
                fetchOneDevice(item.deviceId).then(data => {
                    price += (data.price * item.count)
                    setTotal(price)
                })
            })
        }
    }

    useEffect(() => {
        setTimeout(() => {
            fetchPrice()
        }, 100)
    }, [])

    return (
        <div>
            <div className={classes.basketTitle}>Корзина</div>
            <div className={classes.basket}>
                <div className={classes.basketList}>
                    {basket.length ? basket.map(e =>
                        <BasketItem
                            item={e}
                            key={e.id}
                            setTotal={setTotal}
                            total={total}
                            basket={basket}
                            setBasket={setBasket}/>
                    ) :
                    <div className={classes.emptyBasket}>Корзина пуста</div>
                    }
                </div>
                <div className={classes.basketTotal}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{fontSize: 25, fontWeight: 'bold'}}>Итого:</div>
                        <div style={{fontSize: 25, fontWeight: 'bold'}}>{total}</div>
                    </div>
                    <MyButton style={{fontSize: 20, fontWeight: 'bold', backgroundColor: '#252525', color: 'white'}}
                              title={'Оформить заказ'}/>
                </div>
            </div>
        </div>
    );
});

export default Basket;