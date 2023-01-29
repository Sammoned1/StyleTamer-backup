import React, {useEffect, useState} from 'react';
import classes from './ItemPhotoSection.module.css'
import {observer} from "mobx-react-lite";
import Item from "../Item";

const ItemPhotoSection = observer(({item}) => {
    const [mainPhoto, setMainPhoto] = useState({})
    const [photoList, setPhotoList] = useState([])

    const changePhoto = (photo) => {
        setMainPhoto(photo)
    }
    // let photoList= []

    useEffect(() => {
        if ('id' in item) {
            item.device_photos.forEach(photo => {
                // console.log(photo.main)
                if (photo.main) {
                    setMainPhoto(photo)
                } else {
                    setPhotoList(current => [...current, photo])
                    // photoList.push(photo)
                    // console.log(photo)
                }
            })
        }
    }, [item])

    return (
        <div className={classes.DevicePhotoSection}>
            <img
                src={'id' in item ? process.env.REACT_APP_API_URL + mainPhoto.name : ''}
                className={classes.mainPhoto}
                alt={'loading...'}/>
            <div className={classes.photoList}>
                {photoList.map(photo =>
                    // <Item/>
                    <div className={classes.photo} key={photo.id} onClick={changePhoto}>
                        <img src={'id' in item ? process.env.REACT_APP_API_URL + photo.name : ''} alt="loading..."/>
                    </div>
                )}
            </div>
        </div>
    );
});

export default ItemPhotoSection;