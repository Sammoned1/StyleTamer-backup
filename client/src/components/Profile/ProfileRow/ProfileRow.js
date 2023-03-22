import React, {useContext, useState} from 'react';
import classes from './ProfileRow.module.css'
import MyInput from "../../UI/Inputs/MyInput/MyInput";
import {Context} from "../../../index";
import jwt_decode from "jwt-decode";

const ProfileRow = ({title, placeholder}) => {
    const {user} = useContext(Context)
    const token = localStorage.getItem('token')
    const username = token ? jwt_decode(token).email : null
    const [active, setActive] = useState(false)
    return (
        <div className={classes.profileRow}>
            <div>{title}</div>
            <div className={classes.inputContainer}>
                <div className={classes.rowTextContainer}>
                    <div className={classes.rowText}>
                        {!active ?
                            placeholder :
                            <input type="text" placeholder={placeholder}/>}
                    </div>

                </div>
                <div className={classes.flagBlock} onClick={() => {
                    if (active)
                        setActive(false)
                    else
                        setActive(true)
                }}/>
                {active ?
                    <div className={classes.flagBlock} onClick={() => {
                        console.log('x')
                    }}/> : null}
            </div>
        </div>
    );
};

export default ProfileRow;