import React, {useContext, useState} from 'react';
import classes from './ProfileBtn.module.css'
import AuthForm from "../../AuthForm/AuthForm";
import {Context} from "../../../../index";
import {useNavigate} from "react-router-dom";
import {PROFILE_ROUTE} from "../../../../utils/consts";

const ProfileBtn = () => {
    const [isActive, setIsActive] = useState(false)
    const {user} = useContext(Context)
    const navigate = useNavigate()
    // console.log(user)
    return (
        <div className={classes.loginContainer}>
            <button className={classes.profileIconContainer} onClick={() => {
                if (!user._isAuth)
                    setIsActive(true)
                else{
                    navigate(PROFILE_ROUTE)
                }
            }}/>
            <AuthForm isActive={isActive} setIsActive={setIsActive}/>
        </div>
    );
};

export default ProfileBtn;