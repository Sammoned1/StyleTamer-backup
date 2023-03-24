import React, {useContext, useEffect, useState} from 'react';
import classes from './AdminItem.module.css'
import {observer} from "mobx-react-lite";
import MySelect from "../../UI/MySelect/MySelect";
import {Context} from "../../../index";
import {fetchOneDevice} from "../../../http/deviceAPI";

const AdminItem = observer(({item}) => {
    const {device} = useContext(Context)
    const [title, setTitle] = useState(item.name)
    const [titleFlag, setTitleFlag] = useState(false)

    const [price, setPrice] = useState(item.price)
    const [priceFlag, setPriceFlag] = useState(false)

    const [gender, setGender] = useState(item.gender)

    const [selectedDevice, setSelectedDevice] = useState({})

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        fetchOneDevice(item.id).then(data => {
            setSelectedDevice(data)
            setLoaded(true)
            // console.log(data)
        })

    }, [])


    return (
        <div className={classes.item}>
            <div className={classes.titleContainer}>
                <div className={classes.itemTitle}>{
                    !titleFlag ?
                        <div className={classes.titleText}>{title}</div> :
                        <textarea value={title} onChange={e => {
                            setTitle(e.target.value)
                        }}/>
                }</div>
                <div className={classes.editBtn} onClick={() => {
                    if (!titleFlag)
                        setTitleFlag(true)
                    else
                        setTitleFlag(false)
                }}>
                    {!titleFlag ?
                        <div className={classes.flagEdit}></div> :
                        <div className={classes.flagCheck}></div>
                    }
                </div>
            </div>
            <div className={classes.priceContainer}>
                <div style={{display: 'flex'}}>
                    <p style={{minWidth: 60}}>Цена:</p>
                    <div className={classes.price}>
                        {!priceFlag ?
                            price :
                            <input type="text" className={classes.priceInput} value={price} onChange={(e) => {
                                setPrice(e.target.value)
                            }}/>
                        }
                    </div>
                    р
                </div>
                <div className={classes.editBtn} onClick={() => {
                    if (!priceFlag)
                        setPriceFlag(true)
                    else
                        setPriceFlag(false)
                }}>
                    {!priceFlag ?
                        <div className={classes.flagEdit}></div> :
                        <div className={classes.flagCheck}></div>
                    }
                </div>
            </div>
            <div className={classes.genderContainer}>
                <p style={{width: 60}}>Пол:</p>
                <div className={classes.genderBtnContainer}>
                    <div className={classes.genderBtn} onClick={() => {
                        setGender("М")
                    }}>
                        <span className={gender === "М" ? classes.active : ''}>М</span>
                    </div>
                    <div className={classes.genderBtn} onClick={() => {
                        setGender("Ж")
                    }}>
                        <span className={gender === "Ж" ? classes.active : ''}>Ж</span>
                    </div>
                </div>
            </div>
            <div className={classes.typeContainer}>
                <p style={{width: 60}}>Тип:</p>
                <MySelect defaultValue={"Выберите"} array={device.types}/>
            </div>
            <div className={classes.brandContainer}>
                <p style={{width: 60}}>Брэнд:</p>
                <MySelect defaultValue={"Выберите"} array={device.brands}/>
            </div>
            <div className={classes.photosContainer}>
                <div className={classes.photoTitle}>Фото:</div>
                <div className={classes.photoList}>
                    <div className={classes.photo + " " + classes.addPhotoBlock}>
                        <div className={classes.addPhotoIcon}>

                        </div>
                    </div>
                    {loaded ? selectedDevice.device_photos.map(photo =>
                        <div key={photo.name} className={classes.photo}>
                            <img src={process.env.REACT_APP_API_URL + photo.name}></img>
                        </div>)
                        :<div>
                    </div>}
                </div>
            </div>
            <div className={classes.btnContainer}>
                <button className={classes.deleteBtn}>УДАЛИТЬ</button>
                <button className={classes.saveBtn}>СОХРАНИТЬ</button>
            </div>
        </div>
    );
});

export default AdminItem;