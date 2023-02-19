import React from 'react';
import classes from './LoadingItem.module.css';
import {DEVICE_ROUTE} from "../../../utils/consts";

const LoadingItem = () => {
    return (
        <div className={classes.item}>
            <div className={classes.itemImage}>
            </div>
            <div className={classes.itemDescription}>
                <div></div>
                <div style={{width: 130, marginTop: 10}}></div>
            </div>
        </div>
    );
};

export default LoadingItem;