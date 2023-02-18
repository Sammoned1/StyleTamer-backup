import React, {useContext, useState} from 'react';
import classes from './LogBtn.module.css'
import {Context} from "../../../../index";
import {observer} from "mobx-react-lite";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE, SHOP_ROUTE} from "../../../../utils/consts";
import jwt_decode from "jwt-decode";
import AuthForm from "../../AuthForm/AuthForm";

const LogBtn = observer(() => {
    const {user} = useContext(Context)
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.clear()
    }
    const [isActive, setIsActive] = useState(false)

    return (
        <div>
            {user.isAuth
                ? <NavLink to={SHOP_ROUTE}>
                    <button onClick={() => logOut()} className={classes.logBtn}>Выйти
                    </button>
                </NavLink>
                : <div className={classes.loginContainer}>
                    <button className={classes.logBtn} onClick={()=>{setIsActive(true)}}>Войти</button>
                    <AuthForm isActive={isActive} setIsActive={setIsActive}/>
                </div>
            }
        </div>
    );
});

export default LogBtn;