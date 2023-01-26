import React, {useContext, useState} from 'react';
import classes from './MySelect.module.css'
import {Context} from "../../../index";
import SelectOption from "./SelectOption/SelectOption";
import {observer} from "mobx-react-lite";

const MySelect = observer(({array, handler}) => {
    const [selectValue, setSelectValue] = useState('Выберите вариант')
    const [clicked, setClicked] = useState(false)

    return (
        <div className={classes.mySelect}>
            <div style={{margin: '0 10px', fontWeight: 'bold'}} className={clicked ? classes.active : ''} onClick={() => {
                clicked ? setClicked(false) : setClicked(true)
            }}>{selectValue}</div>
            {clicked
                ? array.map(item =>
                    <SelectOption onClick={()=>{
                        setSelectValue(item.name)
                        handler(item)
                        setClicked(false)
                    }} key={item.name} value={item.name}/>
                ) : null
            }

        </div>
    );
});

export default MySelect;