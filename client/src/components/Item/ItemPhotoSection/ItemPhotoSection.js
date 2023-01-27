import React from 'react';
import classes from './ItemPhotoSection.module.css'
import {observer} from "mobx-react-lite";

const ItemPhotoSection = observer((device) => {
    return (
        <div className={classes.DevicePhotoSection}>
            <img src={process.env.REACT_APP_API_URL + device.device.img} className={classes.mainPhoto}/>
            <div className={classes.photoList}>
            </div>
        </div>
    );
});

export default ItemPhotoSection;