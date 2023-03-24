import React, {useContext, useState, useEffect} from 'react';
import classes from './Admin.module.css'
import MyButton from "../UI/Buttons/MyButton/MyButton";
import MyInput from "../UI/Inputs/MyInput/MyInput";
import CreateNewItemModal from "../CreateNewItemModal/CreateNewItemModal";
import {createBrand, createType, fetchBrands, fetchDevices, fetchTypes} from "../../http/deviceAPI";
import {Context} from "../../index";

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

    return (
        <div className={classes.adminPage}>
            <div className={classes.adminContainer}>
                <div className={classes.adminTitle}>ПАНЕЛЬ АДМИНИСТРАТОРА</div>





                {/*<div className={classes.adminTitle}>Панель Администратора</div>*/}
                {/*/!*<div className={classes.alert}> ! Название типа и бренда вводить с большой буквы !</div>*!/*/}
                {/*<div className={classes.addTitle}>Добавить новый тип</div>*/}
                {/*<div className={classes.add}>*/}
                {/*    <MyInput placeholder={'Введите название типа'} handler={setType} value={type}/>*/}
                {/*    <MyButton title={'Добавить'} style={{fontSize: 20, marginLeft: 25}} onClick={addType}/>*/}
                {/*</div>*/}
                {/*<div className={classes.addTitle}>Добавить новый бренд</div>*/}
                {/*<div className={classes.add}>*/}
                {/*    <MyInput placeholder={'Введите название бренда'} handler={setBrand} value={brand}/>*/}
                {/*    <MyButton title={'Добавить'} style={{fontSize: 20, marginLeft: 25}} onClick={addBrand}/>*/}
                {/*</div>*/}
                {/*<div style={{width: 300, margin: '50px auto 20px auto'}}>*/}
                {/*    <MyButton onClick={createItem} title={'Добавить товар'} style={{fontSize: 20}}/>*/}
                {/*</div>*/}
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