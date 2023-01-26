import React, {useContext} from 'react';
import classes from './UserName.module.css'
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {NavLink} from "react-router-dom";
import {PROFILE_ROUTE} from "../../utils/consts";
import jwt_decode from "jwt-decode";
import {login} from "../../http/userAPI";

const UserName = observer(() => {
    const {user} = useContext(Context)
    const token = localStorage.getItem('token')
    const username = token ? jwt_decode(token).email : null
    // const username = !!token ? null : jwt_decode(token).email
    // console.log(username)

        return (
            <div className={classes.userBlock}>
                {user.isAuth
                    ? <NavLink to={PROFILE_ROUTE}>
                        <div className={classes.userName}>
                            {username}
                        </div>
                    </NavLink>
                    : null
                }
            </div>


        );
});

export default UserName;