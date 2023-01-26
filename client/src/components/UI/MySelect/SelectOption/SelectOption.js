import React from 'react';
import classes from './SelectOption.module.css'
import {observer} from "mobx-react-lite";

const SelectOption = observer(({value, onClick}) => {
    return (
        <div className={classes.selectOption} onClick={onClick}>
            {value}
        </div>
    );
});

export default SelectOption;