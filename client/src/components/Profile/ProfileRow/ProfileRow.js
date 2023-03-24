import React, {useContext, useState} from 'react';
import classes from './ProfileRow.module.css'
import MyInput from "../../UI/Inputs/MyInput/MyInput";
import {Context} from "../../../index";
import jwt_decode from "jwt-decode";

const ProfileRow = ({title, placeholder}) => {
    const {user} = useContext(Context)
    const token = localStorage.getItem('token')
    const EMAIL = token ? jwt_decode(token).email : null
    const [active, setActive] = useState(false)
    const [string, setString] = useState(placeholder)
    return (
        <div className={classes.profileRow}>
            <div>{title}</div>
            <div className={classes.inputContainer}>
                <div className={classes.rowTextContainer}>
                    <div className={classes.rowText}>
                        {!active ?
                            string :
                            <input type="text" value={string} onChange={e => {
                                // console.log(e.target.value)
                                setString(e.target.value)
                            }}/>}
                    </div>

                </div>
                {!active ?
                    <div className={classes.flagBlock} onClick={() => {
                        setActive(true)
                    }}>
                        <div className={classes.flagEdit}></div>
                    </div> :
                    <div className={classes.flagBlock} onClick={() => {
                        setActive(false)
                    }}>
                        <div className={classes.flagCheck}></div>
                    </div>
                }

                {active ?
                    <div className={classes.flagBlock} onClick={() => {
                        setString(placeholder)
                        setActive(false)
                    }}>
                        <div className={classes.flagCross}></div>
                    </div> : null}
            </div>
        </div>
    );
};

export default ProfileRow;