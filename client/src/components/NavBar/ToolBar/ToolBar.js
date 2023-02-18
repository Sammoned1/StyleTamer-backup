import React, {useContext} from 'react';
import {Context} from "../../../index";
import classes from './ToolBar.module.css'
import ToolBtn from "../../UI/Buttons/ToolBtn/ToolBtn";
import {NavLink} from "react-router-dom";
import {
    BAGS_ROUTE,
    BASKET_ROUTE,
    BOOTS_ROUTE,
    BRANDS_ROUTE,
    CATALOGUE_ROUTE,
    CLOTHES_ROUTE,
    JEWELLERY_ROUTE,
    MAN_COLLECTION_ROUTE,
    SHOP_ROUTE, WOMAN_COLLECTION_ROUTE
} from "../../../utils/consts";

import jwt_decode from "jwt-decode";

const ToolBar = () => {
    const {device} = useContext(Context)
    const tools = [
        // {id: 1, title: 'Главная', path: SHOP_ROUTE},
        {id: 1, title: 'Каталог', path: CATALOGUE_ROUTE},
        {id: 2, title: 'Мужчины', path: MAN_COLLECTION_ROUTE},
        {id: 3, title: 'Женщины', path: WOMAN_COLLECTION_ROUTE},
        // {id: 3, disabled: true, title: 'Бренды', path: BRANDS_ROUTE},
        {id: 4, title: 'Одежда', path: CLOTHES_ROUTE},
        {id: 5, title: 'Обувь', path: BOOTS_ROUTE},
        {id: 6, title: 'Сумки', path: BAGS_ROUTE},
        // {id: 7, title: 'Украшения', path: JEWELLERY_ROUTE},
        // {id: 7, title: 'Корзина', path: BASKET_ROUTE},
    ]

    return (<div className={classes.toolBar}>
        {tools.map((tool) =>
            <NavLink key={tool.path} to={tool.path}>
                <ToolBtn
                    disabled={tool.disabled}
                    key={tool.id}
                    title={tool.title}
                />
            </NavLink>)}
    </div>);
};

export default ToolBar;