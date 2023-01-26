import React, {useContext} from 'react';
import {Context} from "../../../index";
import "./TopAppBar.module.css"
import SearchBar from "../../UI/SearchBar/SearchBar";
import LogBtn from "../../UI/Buttons/LogBtn/LogBtn";
import UserName from "../../UserName/UserName";
import Logo from "../../Logo/Logo";
import {observer} from "mobx-react-lite";

const TopAppBar = observer(() => {
    return (
        <header>
            <Logo/>
            <SearchBar/>
            <UserName/>
            <LogBtn/>
        </header>
    );
});

export default TopAppBar;