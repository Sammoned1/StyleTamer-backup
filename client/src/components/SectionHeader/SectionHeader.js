import React, {useState} from 'react';
import FilterBtn from "../UI/Buttons/FilterBtn/FilterBtn";
import classes from './SectionHeader.module.css'
import FilterList from "../FilterList/FilterList";
import {observer} from "mobx-react-lite";

const SectionHeader = ({title}) => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <div>
            <div className={classes.sectionTitle}>{title}</div>
        </div>
    );
};

export default SectionHeader;