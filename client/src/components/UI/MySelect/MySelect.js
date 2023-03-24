import React, {useContext, useState} from 'react';
import classes from './MySelect.module.css'
import {Context} from "../../../index";
import SelectOption from "./SelectOption/SelectOption";
import {observer} from "mobx-react-lite";

const MySelect = observer(({array, handler, defaultValue}) => {
    const [selectValue, setSelectValue] = useState(defaultValue)
    const [clicked, setClicked] = useState(false)

    return (
        <div className={classes.mySelect}>
            <div className={classes.selectedValue} onClick={() => {
                clicked ? setClicked(false) : setClicked(true)
            }}>{selectValue}</div>
            {clicked
                ? array.map(item =>
                    <SelectOption onClick={()=>{
                        setSelectValue(item.name)
                        // handler(item)
                        setClicked(false)
                    }} key={item.name} value={item.name}/>
                ) : null
            }
        </div>
    );
});

export default MySelect;