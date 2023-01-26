import React, {useContext} from 'react';
import classes from './Profile.module.css'
import ProfileRow from "./ProfileRow/ProfileRow";
import MyButton from "../UI/Buttons/MyButton/MyButton";
import {Context} from "../../index";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE} from "../../utils/consts";
import jwt_decode from "jwt-decode";

const Profile = () => {
    const {user} = useContext(Context)
    const TOKEN = localStorage.getItem('token')
    const USER = TOKEN ? jwt_decode(TOKEN) : null
    return (
        <div>
            <div className={classes.profile}>
                <div className={classes.profileTitle}>Профиль</div>
                <ProfileRow title={'Логин'} placeholder={'UserName'}/>
                <ProfileRow title={'Почта'} placeholder={'email@example.com'}/>
                <ProfileRow title={'Пароль'} placeholder={'Новый пароль'}/>
                <ProfileRow placeholder={'Повторите пароль'}/>
                <ProfileRow title={'Адрес'} placeholder={'Введите адрес доставки'}/>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <MyButton title={'Сохранить'} style={{width: 270, fontSize: 20, margin: '20px 0'}}/>
                </div>
            </div>
            {USER.role === 'ADMIN'
                ? <div className={classes.adminPanel}>
                    <div className={classes.adminText}>Панель администратора</div>
                    <NavLink to={ADMIN_ROUTE} style={{width: '100%'}}>
                        <MyButton title={'Открыть'} style={{fontSize: 20}}/>
                    </NavLink>
                </div>
                : null
            }

        </div>
    );
};

export default Profile;