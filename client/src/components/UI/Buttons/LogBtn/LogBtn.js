import React, {useContext} from 'react';
import classes from './LogBtn.module.css'
import {Context} from "../../../../index";
import {observer} from "mobx-react-lite";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE, SHOP_ROUTE} from "../../../../utils/consts";
import jwt_decode from "jwt-decode";

const LogBtn = observer(() => {
    const {user} = useContext(Context)
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.clear()
    }

    return (
        <div>
            {user.isAuth
                ? <NavLink to={SHOP_ROUTE}>
                    <button onClick={() => logOut()} className={classes.logBtn}>Выйти
                    </button>
                </NavLink>
                : <NavLink to={LOGIN_ROUTE}>
                    <button className={classes.logBtn}>Войти</button>
                </NavLink>
            }
        </div>
    );
});

export default LogBtn;