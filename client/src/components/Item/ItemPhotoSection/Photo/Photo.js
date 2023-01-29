import React from 'react';
import classes from './Photo.module.css'
import {observer} from "mobx-react-lite";

const Photo = observer(({photo, handler}) => {
    return (
        <div className={classes.photo} key={photo.id} onClick={()=>{
            handler(photo)}}>
            <img src={'id' in photo ? process.env.REACT_APP_API_URL + photo.name : ''} alt="loading..."/>
        </div>
    );
});

export default Photo;