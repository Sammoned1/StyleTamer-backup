import React, {useContext} from 'react';
import { Route, Routes } from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes";
import Shop from "../ShopPages/Shop";
import {Context} from "../index";
import jwt_decode from "jwt-decode";

const AppRouter = () => {
    const {user} = useContext(Context)
    // const TOKEN = localStorage.getItem('token')
    // const USER = TOKEN ? jwt_decode(TOKEN) : null

    return (
        <div>
            <Routes>
                {user.isAuth && authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component} exact/>
                )}
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component} exact/>
                )}
                <Route path={'*'} element={<Shop/>}/>
            </Routes>
        </div>
    );
};

export default AppRouter;