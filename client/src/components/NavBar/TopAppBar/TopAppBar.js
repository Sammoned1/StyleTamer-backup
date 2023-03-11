import React, {useContext} from 'react';
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

const TopAppBar = observer(() => {
    return (
        <header>
            <div className={classes.barContent}>
                <div className={classes.barContainer} style={{display: 'flex', alignItems: 'center'}}>
                    <ToolBar/>
                </div>
                <div className={classes.barContainer} style={{display: 'flex', justifyContent: 'center'}}><NavLink to={SHOP_ROUTE}><Logo/></NavLink></div>
                <div className={classes.barContainer} style={{display: 'flex', justifyContent: 'end'}}>
                    {/*<UserName/>*/}
                    {/*<LogBtn/>*/}
                    <div className={classes.searchIconContainer}>

                    </div>
                    <div className={classes.profileIconContainer}>

                    </div>
                </div>
            </div>
            {/*<SearchBar/>*/}
        </header>
    );
});

export default TopAppBar;