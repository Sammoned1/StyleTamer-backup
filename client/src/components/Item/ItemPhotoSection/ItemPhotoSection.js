import React, {useEffect, useState} from 'react';
import classes from './ItemPhotoSection.module.css'
import {observer} from "mobx-react-lite";
import Item from "../Item";
import Photo from "./Photo/Photo";

const ItemPhotoSection = observer(({item}) => {
    const [mainDevice, setMainDevice] = useState({})
    const [photoList, setPhotoList] = useState([])

    const changePhoto = (photo) => {
        setPhotoList(photoList.filter(i => i.name !== photo.name))
        setPhotoList(current => [...current, mainDevice])
        setMainDevice(photo)
    }

    useEffect(() => {
        if ('id' in item) {
            item.device_photos.forEach(photo => {
                if (photo.main) {
                    setMainDevice(photo)
                } else {
                    setPhotoList(current => [...current, photo])
                }
            })
        }
    }, [item])

    return (
        <div className={classes.DevicePhotoSection}>
            <img
                src={'id' in item ? process.env.REACT_APP_API_URL + mainDevice.name : ''}
                className={classes.mainPhoto}
                alt={'loading...'}/>
            <div className={classes.photoList}>
                {photoList.map(photo =>
                    <Photo key={photo.id} photo={photo} handler={changePhoto}/>
                )}
            </div>
        </div>
    );
});

export default ItemPhotoSection;