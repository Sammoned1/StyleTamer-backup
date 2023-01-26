import React from 'react';
import classes from './Item.module.css'
import {useNavigate} from 'react-router-dom'
import {DEVICE_ROUTE} from "../../utils/consts";
import {useContext} from "react";
import {SliderContext} from "../Slider/slider-context";



const Item = ({device, price='10000'}) => {
    const navigate = useNavigate()
    // console.log(path.resolve(__dirname, '..', 'static', device.img))
    return (
        <div className={classes.item} onClick={()=>navigate(DEVICE_ROUTE + '/' + device.id)}>
            <img src={process.env.REACT_APP_API_URL + device.img} className={classes.itemImage}></img>
            <div className={classes.itemDescription}>
                <p style={{height : "auto"}}>{device.name}</p>
                <p style={{fontWeight: 'bold'}}>{device.price} р</p>
            </div>
        </div>
    );
};

export default Item;