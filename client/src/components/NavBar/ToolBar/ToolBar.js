import React, {useContext} from 'react';
import {Context} from "../../../index";
import classes from './ToolBar.module.css'
import ToolBtn from "../../UI/Buttons/ToolBtn/ToolBtn";
import {NavLink, useNavigate} from "react-router-dom";
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
        // {id: 2, title: 'Мужчины', path: MAN_COLLECTION_ROUTE},
        // {id: 3, title: 'Женщины', path: WOMAN_COLLECTION_ROUTE},
        // {id: 3, disabled: true, title: 'Бренды', path: BRANDS_ROUTE},
        {id: 2, title: 'Одежда', path: CLOTHES_ROUTE},
        {id: 3, title: 'Обувь', path: BOOTS_ROUTE},
        {id: 4, title: 'Сумки', path: BAGS_ROUTE},
        // {id: 7, title: 'Украшения', path: JEWELLERY_ROUTE},
        // {id: 7, title: 'Корзина', path: BASKET_ROUTE},
    ]

    const navigate = useNavigate()

    return(
        <div>
            <div className={classes.toolBar}>
                {tools.map((tool) =>
                    <ToolBtn
                        onClick={() => {
                            navigate(tool.path)
                        }}
                        disabled={tool.disabled}
                        key={tool.id}
                        title={tool.title}
                    />)}
            </div>
            <div className={classes.toolIconContainer}>

            </div>
        </div>
    );
};

export default ToolBar;