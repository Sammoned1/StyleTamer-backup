import React, {useContext, useState} from 'react';
import classes from './AuthForm.module.css';
import AuthRow from "../AuthRow/AuthRow";
import MyInput from "../Inputs/MyInput/MyInput";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../../../utils/consts";
import MyButton from "../Buttons/MyButton/MyButton";
import {Context} from "../../../index";
import Logo from "../../Logo/Logo";
import {observer} from "mobx-react-lite";
import {login, registration} from "../../../http/userAPI";
import {click} from "@testing-library/user-event/dist/click";
import Shop from "../../../ShopPages/Shop";

const AuthForm = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location.pathname)
    const {user} = useContext(Context)
    const [email, setEmail] = useState('')
    const [passwd, setPasswd] = useState('')
    const [retypePasswd, setRetypePasswd] = useState('')
    const [passwdFlag, setPasswdFlag] = useState(false)
    const [retypePasswdFlag, setRetypePasswdFlag] = useState(false)


    const click = async (e) => {
        e.preventDefault()
        try {
            let data;
            if (isLogin) {
                data = await login(email, passwd).then(()=> navigate(SHOP_ROUTE))
            } else {
                data = await registration(email, passwd).then(()=> navigate(SHOP_ROUTE))
            }
            console.log('data', data)
            user.setIsAuth(true)
            user.setUser(true)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    const setInputDefault = () => {
        setEmail('')
        setPasswd('')
        setRetypePasswd('')
        setPasswdFlag(false)
        setRetypePasswdFlag(false)
    }

    return (
        <div className={isLogin ? classes.authPage : classes.authPage + " " + classes.registration}>
            <form className={classes.authForm}>
                <div className={classes.title}>{isLogin ? 'ВХОД' : 'РЕГИСТРАЦИЯ'}</div>
                <AuthRow
                    leftIcon={classes.authIcon + ' ' + classes.emailIcon}
                    rowClass={classes.row}
                    rightIcon={classes.authIcon}
                    element={<MyInput
                        value={email}
                        type={'email'}
                        placeholder={'Почта'}
                        handler={setEmail}/>}
                />
                <AuthRow
                    leftIcon={classes.authIcon + ' ' + classes.passwordIcon}
                    rowClass={classes.row}
                    rightIcon={classes.authIcon + ' ' + classes.eyeIcon}
                    active={classes.active}
                    eyeFlag={passwdFlag}
                    setEyeFlag={setPasswdFlag}
                    element={<MyInput
                        value={passwd}
                        type={!passwdFlag ? 'password' : 'text'}
                        placeholder={'Пароль'}
                        handler={setPasswd}/>}
                />
                {isLogin
                    ? null
                    : <AuthRow
                        leftIcon={classes.authIcon + ' ' + classes.passwordIcon}
                        rowClass={classes.row}
                        rightIcon={classes.authIcon + ' ' + classes.eyeIcon}
                        active={classes.active}
                        eyeFlag={retypePasswdFlag}
                        setEyeFlag={setRetypePasswdFlag}
                        element={<MyInput
                            value={retypePasswd}
                            type={!retypePasswdFlag ? 'password' : 'text'}
                            placeholder={'Повторите пароль'}
                            handler={setRetypePasswd}/>}
                    />
                }
                {isLogin
                    ? <AuthRow
                        leftIcon={classes.authIcon}
                        rowClass={classes.row}
                        rightIcon={classes.authIcon}
                        element={
                            <MyButton
                                onClick={click}
                                title={'Войти'}
                                style={{
                                    fontSize: '18px'
                                }}
                            />}
                    />
                    : <AuthRow
                        leftIcon={classes.authIcon}
                        rowClass={classes.row}
                        rightIcon={classes.authIcon}
                        element={
                            <NavLink to={SHOP_ROUTE}><MyButton
                                // onClick={click}
                                title={'Создать аккаунт'}
                                style={{
                                    fontSize: '18px'
                                }}
                            /></NavLink>}
                    />
                }
                <AuthRow
                    leftIcon={classes.authIcon}
                    rowClass={classes.row}
                    rightIcon={classes.authIcon}
                    element={<div className={classes.authText}>Проблемы со входом?</div>}
                />
                {isLogin
                    ? <AuthRow
                        leftIcon={classes.authIcon}
                        rowClass={classes.row}
                        rightIcon={classes.authIcon}
                        element={<NavLink className={classes.authText + ' ' + classes.toRegistration}
                                          to={REGISTRATION_ROUTE}>
                            <div onClick={setInputDefault}>Создайте аккаунт прямо сейчас</div>
                        </NavLink>}
                    />
                    : <AuthRow

                        leftIcon={classes.authIcon}
                        rowClass={classes.row}
                        rightIcon={classes.authIcon}
                        element={<NavLink className={classes.authText + ' ' + classes.toRegistration}
                                          to={LOGIN_ROUTE}>
                            <div onClick={setInputDefault}>Уже есть аккаунт?</div>
                        </NavLink>}
                    />
                }

            </form>
        </div>
    );
};

export default AuthForm;