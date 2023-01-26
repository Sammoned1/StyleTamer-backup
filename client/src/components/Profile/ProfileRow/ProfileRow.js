import React from 'react';
import classes from './ProfileRow.module.css'
import MyInput from "../../UI/Inputs/MyInput/MyInput";

const ProfileRow = ({title, placeholder}) => {
    return (
        <div className={classes.profileRow}>
            <div className={classes.profileTitle}>{title}</div>
            <MyInput placeholder={placeholder}/>
        </div>
    );
};

export default ProfileRow;