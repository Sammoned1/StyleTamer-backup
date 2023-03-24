import React, {useContext, useState, useEffect} from 'react';
import classes from './Admin.module.css'
import MyButton from "../UI/Buttons/MyButton/MyButton";
import MyInput from "../UI/Inputs/MyInput/MyInput";
import CreateNewItemModal from "../CreateNewItemModal/CreateNewItemModal";
import {createBrand, createType, fetchBrands, fetchDevices, fetchTypes} from "../../http/deviceAPI";
import {Context} from "../../index";
import AdminItem from "../Item/AdminItem/AdminItem";

const Admin = () => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [])

    const [type, setType] = useState('')
    const [brand, setBrand] = useState('')

    const addType = () => {
        createType({name: type}).then(data => {
            setType('')
        })
    }

    const addBrand = () => {
        createBrand({name: brand}).then(data => {
            setBrand('')
        })
    }

    const [itemList, setItemList] = useState([])

    const createItem = () => {
        setItemList([...itemList, {name: '', price: '', type: '', brand: '', number: Date.now()}])
    }

    const removeItem = (number) => {
        setItemList(itemList.filter(i => i.number !== number))
    }

    console.log(device.devices)

    return (
        <div className={classes.adminPage}>
            <div className={classes.adminContainer}>
                <div className={classes.adminTitle}>ПАНЕЛЬ АДМИНИСТРАТОРА</div>
                <div className={classes.adminUpperRow}>
                    <div className={classes.upperRowContainer}>
                        <div className={classes.rowTitle}>типы</div>
                        <div className={classes.addNewContainer}>
                            <div className={classes.inputBlock}><input type="text" placeholder="Добавить новый..."/>
                            </div>
                            <button className={classes.adminBtn}>ДОБАВИТЬ</button>
                        </div>
                        <div className={classes.upperRowList}>
                            {device.types.map(type =>
                                <div className={classes.item} key={type.id}>{type.name}</div>
                            )}
                        </div>
                    </div>
                    <div className={classes.upperRowContainer}>
                        <div className={classes.rowTitle}>брэнды</div>
                        <div className={classes.addNewContainer}>
                            <div className={classes.inputBlock}><input type="text" placeholder="Добавить новый..."/>
                            </div>
                            <button className={classes.adminBtn}>ДОБАВИТЬ</button>
                        </div>
                        <div className={classes.upperRowList}>
                            {device.brands.map(brand =>
                                <div className={classes.item} key={brand.id}>{brand.name}</div>
                            )}
                        </div>
                    </div>
                </div>
                <div className={classes.adminLowerRow}>
                    <div className={classes.rowTitle}>товары</div>
                    <div className={classes.lowerRowContainer}>
                        {device.devices.map(device =>
                            <AdminItem key={device.id} item={device}/>
                        )}
                    </div>
                </div>
            </div>

            {/*<div className={classes.createItemSection}>*/}
            {/*    {itemList.map((e) =>*/}
            {/*        <CreateNewItemModal callback={removeItem} number={e.number} key={e.number}/>*/}
            {/*    )}*/}
            {/*</div>*/}
        </div>
    );
};

export default Admin;