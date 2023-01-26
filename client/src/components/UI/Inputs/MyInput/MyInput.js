import React from 'react';
import classes from './MyInput.module.css'

const MyInput = ({type, placeholder, value, handler, priceFlag}) => {
    return (
        <div className={classes.myInput}>
            <input className={classes.input} type={type} placeholder={placeholder} value={value}
                   onChange={e => {
                       if (priceFlag){
                           handler(Number(e.target.value))
                       }
                       else{
                           handler(e.target.value)
                       }

                   }}/>
        </div>
    );
};

export default MyInput;