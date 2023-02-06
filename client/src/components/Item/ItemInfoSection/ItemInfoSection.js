import React, {useState} from 'react';
import SizeBtn from "../../UI/Buttons/SizeBtn/SizeBtn";
import classes from './ItemInfoSection.module.css'
import MyButton from "../../UI/Buttons/MyButton/MyButton";
import ItemDescription from "../ItemDescription/ItemDescription";
import {addBasketDevice} from '../../../http/basketAPI'
import {idID} from "@material-ui/core/locale";
import jwt_decode from "jwt-decode";
import DeleteModal from "./DeleteModal/DeleteModal";
import {removeDevice} from "../../../http/deviceAPI";
import {useNavigate} from "react-router-dom";
import {CATALOGUE_ROUTE, SHOP_ROUTE} from "../../../utils/consts";
import {observer} from "mobx-react-lite";

const ItemInfoSection = observer(({item}) => {
    const navigate = useNavigate()
    const TOKEN = localStorage.getItem('token')
    const USER = TOKEN ? jwt_decode(TOKEN) : null
    const basketId = USER ? USER.id : null
    const addToBasket = () => {
        addBasketDevice({deviceId: item.id, basketId}).then(data => {
            if (data.message) {
                alert(data.message)
            }
        })
    }

    const [modalActive, setModalActive] = useState(false)

    const showModal = () => {
        setModalActive(true)
    }
    const hideModal = () => {
        setModalActive(false)
    }

    const deleteDevice = ()=>{
        // console.log(device.device)
        removeDevice(item).then(data => {
            setModalActive(false)
        })
        // navigate(SHOP_ROUTE)
    }

    return (
        <div className={classes.deviceInfoSection}>
            <div className={classes.itemTitle}>
                {item.name}
            </div>
            <div className={classes.itemPrice}>
                {item.price}
            </div>
            <span className={classes.sizeText}>
                Размер
            </span>
            <span className={classes.sizeText + ' ' + classes.sizeTableText}>
                Таблица размеров
            </span>
            <div className={classes.sizeLine}>
                <SizeBtn size={'XS'}/>
                <SizeBtn size={'S'}/>
                <SizeBtn size={'M'}/>
                <SizeBtn size={'L'}/>
                <SizeBtn size={'XL'}/>
            </div>
            <MyButton
                className={classes.addBtn}
                title={'Добавить в корзину'}
                onClick={addToBasket}
            />
            {USER.role === 'ADMIN' ?
                <div>
                    {modalActive ?
                        <DeleteModal
                            device={item}
                            deleteHandler={deleteDevice}
                            modalHandler={hideModal}/>
                        : null}
                    <MyButton
                        title={'Удалить товар'}
                        className={classes.delBtn}
                        onClick={showModal}
                    />
                </div>
                : null}
        </div>
    );
});

export default ItemInfoSection;