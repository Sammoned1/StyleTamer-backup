import React, {useContext, useMemo, useState} from 'react';
import classes from './FilterRaw.module.css'
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";

const FilterRaw = observer(({item, choose, expand, selected, leftImage, flag}) => {
    return (
        <div className={!selected ? classes.filterRaw : classes.filterRaw + ' ' + classes.clicked}>
            <div style={{width:'100%'}} onClick={() => {
                choose(item)
            }}>
                <div  style={{display: 'flex'}}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div className={classes.filterRawIcon + ' ' + leftImage}></div>
                    </div>
                    <div style={{width: '100%'}}>
                        <div className={classes.filterRawText}>{item.name}</div>
                    </div>
                </div>
            </div>
            <div className={classes.expandFilterArrow} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={() => {
                expand(item)
            }}>
                <div className={flag ? classes.rightImage + ' ' + classes.filterRawIcon : classes.filterRawIcon}></div>
            </div>
        </div>
    );
});

export default FilterRaw;