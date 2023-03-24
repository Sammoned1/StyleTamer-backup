import React, {useContext} from 'react';
import classes from './Profile.module.css'
import ProfileRow from "./ProfileRow/ProfileRow";
import MyButton from "../UI/Buttons/MyButton/MyButton";
import {Context} from "../../index";
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import jwt_decode from "jwt-decode";

const Profile = () => {
    const {user, device} = useContext(Context)
    const TOKEN = localStorage.getItem('token')
    const USER = TOKEN ? jwt_decode(TOKEN) : null
    const navigate = useNavigate()

    const logOut = () => {
        navigate(SHOP_ROUTE)
        user.setUser({})
        user.setIsAuth(false)
        localStorage.clear()
    }

    return (
        <div className={classes.profilePage}>
            <div className={classes.profileContainer}>
                <div className={classes.profileColumn}>
                    <div className={classes.profileInnerColumn  + " " + classes.leftInnerColumn}>
                        <div className={classes.profileTitle}>ПРОФИЛЬ</div>
                        {USER.role === 'ADMIN'
                            ? <button className={classes.adminBtn} onClick={() => {
                                navigate(ADMIN_ROUTE)
                            }}>АДМИН</button>
                            : null
                        }
                        <ProfileRow title={'логин'} placeholder={'username'}/>
                        <ProfileRow title={'почта'} placeholder={'example@ex.com'}/>
                        <button className={classes.profileBtn}>СМЕНИТЬ ПАРОЛЬ</button>
                        <button className={classes.profileBtn}>СОХРАНИТЬ</button>
                        <button className={classes.logOutBtn} onClick={() => {
                            logOut()
                        }}>ВЫЙТИ
                        </button>
                    </div>
                </div>
                <div className={classes.profileColumn + " " + classes.centralColumn}>
                    <div className={classes.profileInnerColumn}>
                        <div className={classes.profileTitle}>ПОНРАВИВШЕЕСЯ</div>
                        {!device.wishList.length ?
                            <div>
                                Здесь пока ничего нет :)
                            </div> :
                            <div>
                                товары
                            </div>
                        }
                    </div>
                </div>
                <div className={classes.profileColumn + " " + classes.rightColumn}>
                    <div className={classes.profileInnerColumn}>
                        <div className={classes.profileTitle}>ИСТОРИЯ</div>
                        {!device.historyList.length ?
                            <div>
                                Здесь пока ничего нет :)
                            </div> :
                            <div>
                                товары
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;