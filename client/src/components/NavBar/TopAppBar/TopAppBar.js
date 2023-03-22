import React, {useContext, useState} from 'react';
import {Context} from "../../../index";
import "./TopAppBar.module.css"
import SearchBar from "../../UI/SearchBar/SearchBar";
import LogBtn from "../../UI/Buttons/LogBtn/LogBtn";
import UserName from "../../UserName/UserName";
import Logo from "../../Logo/Logo";
import {observer} from "mobx-react-lite";
import ToolBar from "../ToolBar/ToolBar";
import classes from './TopAppBar.module.css'
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../../../utils/consts";
import Profile from "../../Profile/Profile";
import ProfileBtn from "../../UI/Buttons/ProfileBtn/ProfileBtn";
import SearchBtn from "../../UI/Buttons/SearchBtn/SearchBtn";

const TopAppBar = observer(() => {
    const [barActive, setBarActive] = useState(false)

    return (
        <header>
            <div className={classes.header}>
                <div className={classes.barContent}>
                    <div className={classes.barContainer} style={{display: 'flex', alignItems: 'center'}}>
                        <ToolBar/>
                    </div>
                    <div className={classes.barContainer} style={{display: 'flex', justifyContent: 'center'}}><NavLink
                        to={SHOP_ROUTE}><Logo/></NavLink></div>
                    <div className={classes.barContainer} style={{display: 'flex', justifyContent: 'end'}}>
                        <SearchBtn onClick={() => {
                            if (barActive)
                                setBarActive(false)
                            else
                                setBarActive(true)
                        }}/>
                        <ProfileBtn/>
                    </div>
                </div>
            </div>
            <SearchBar barActive={barActive}/>
        </header>
    );
});

export default TopAppBar;