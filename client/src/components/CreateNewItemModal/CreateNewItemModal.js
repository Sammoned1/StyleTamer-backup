import React, {useContext, useEffect, useState} from 'react';
import classes from './CreateNewItemModal.module.css'
import MySelect from "../UI/MySelect/MySelect";
import {Context} from "../../index";
import MyInput from "../UI/Inputs/MyInput/MyInput";
import MyButton from "../UI/Buttons/MyButton/MyButton";
import AddPhotoInput from "../UI/Inputs/AddPhotoInput/AddPhotoInput";
import {createDevice} from "../../http/deviceAPI";
import AddedPhoto from "./AddedPhoto/AddedPhoto";
import {observer} from "mobx-react-lite";
import {forEach} from "react-bootstrap/ElementChildren";

const CreateNewItemModal = observer(({callback, number}) => {
    const {device} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState('')
    const [selectedBrand, setSelectedBrand] = useState(null)
    const [selectedType, setSelectedType] = useState(null)
    const [selectedGender, setSelectedGender] = useState('')
    const [photos, setPhotos] = useState([])
    const [checked, setChecked] = useState({})

    const selectFile = e => {
        // setChecked(e.target.files[0])
        setPhotos([...photos, ...e.target.files])
    }

    useEffect(()=>{
        setChecked(photos[0])
    },[photos])

    const addDevice = () => {
        try {
            const formData = new FormData()
            formData.append('name', name)
            formData.append('price', `${price}`)
            formData.append('img', photos[0])
            formData.append('gender', selectedGender)
            formData.append('brandId', selectedBrand.id)
            formData.append('typeId', selectedType.id)
            // console.log(formData.keys())
            formData.append('info', info)
            console.log(formData)
            for (const value of formData.values()) {
                console.log(value);
            }
            createDevice(formData).then(data => {
                callback(number)
            })
        } catch (e) {
            alert('Ошибка при добавлении товара')
        }
        console.log(checked)
        console.log(photos)
        // console.log(photos[0])
    }

    return (
        <div className={classes.createModal}>
            <div className={classes.createItemTitle}>Новый товар</div>
            <div style={{margin: '15px 0'}}>
                <MyInput placeholder={'Введите название товара'} value={name} handler={setName}/>
            </div>
            <div style={{margin: '15px 0'}}>
                <MyInput
                    placeholder={'Введите цену товара'}
                    value={price || ''}
                    priceFlag={true}
                    handler={setPrice}
                />
            </div>
            <div style={{margin: '15px 0', display: 'flex'}}>
                <MyButton
                    title={'М'}
                    onClick={() => {
                        setSelectedGender('M')
                    }}
                    style={{borderTopRightRadius: 0, borderBottomRightRadius: 0, marginRight: 2}}/>
                <MyButton
                    title={'Ж'}
                    onClick={() => {
                        setSelectedGender('F')
                    }}
                    style={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0, marginLeft: 2}}/>
            </div>

            {/*<div className={classes.textAreaBlock}>*/}
            {/*    <textarea*/}
            {/*        className={classes.textArea}*/}
            {/*        placeholder={'Введите описание товара'}*/}
            {/*        wrap={'soft'}*/}
            {/*        name=""*/}
            {/*        value={info}*/}
            {/*        id="" cols="10" rows="3"*/}
            {/*        onChange={e => {*/}
            {/*            setInfo(e.target.value)*/}
            {/*        }}></textarea>*/}
            {/*</div>*/}
            <div className={classes.createModalText}>Выберите тип товара</div>
            <MySelect array={device.types} handler={setSelectedType}/>
            <div className={classes.createModalText}>Выберите бренд товара</div>
            <MySelect array={device.brands} handler={setSelectedBrand}/>
            <div className={classes.createModalText}>Выберите фото товара</div>
            <AddPhotoInput onChange={selectFile} number={number}/>
            {/*<label htmlFor={number}>файл</label>*/}
            {/*<AddPhotoInput/>*/}
            {/*<input type="file" id={number} onChange={selectFile} multiple/>*/}
            <div style={{marginBottom: 20}} className={classes.photoBlock}>
                {photos.length ? photos.map((photo) =>
                    <AddedPhoto key={photo.name} photo={photo} array={photos} setArray={setPhotos} checked={checked} setChecked={setChecked}/>
                ) : null}
            </div>
            <div style={{display: 'flex'}}>
                <MyButton title={'Отменить'} onClick={() => {
                    callback(number)
                }} style={{fontSize: 20, marginRight: '10px'}}/>
                <MyButton title={'Добавить'} style={{fontSize: 20, marginLeft: '10px'}} onClick={addDevice}/>
            </div>
        </div>
    );
});

export default CreateNewItemModal;