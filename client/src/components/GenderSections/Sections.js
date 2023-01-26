import React, {useContext} from 'react';
import classes from './Sections.module.css'
import {useNavigate} from "react-router-dom";
import {MAN_COLLECTION_ROUTE, WOMAN_COLLECTION_ROUTE} from "../../utils/consts";
import {Context} from "../../index";

const Sections = () => {
    const navigate = useNavigate()
    const {device} = useContext(Context)

    return (
        <div className={classes.sections}>
            <div className={classes.woman + ' ' + classes.section} onClick={() => {
                // device.setGender('F')
                navigate(WOMAN_COLLECTION_ROUTE)
                // console.log(device.selectedGender)
            }}>
                <h1 className={classes.sectionText}>ДЛЯ НЕЁ</h1>
            </div>
            <div className={classes.man + ' ' + classes.section} onClick={() => {
                // device.setGender('M')
                navigate(MAN_COLLECTION_ROUTE)
                // console.log(device.selectedGender)
            }}>
                <h1 className={classes.sectionText}>ДЛЯ НЕГО</h1>
            </div>
        </div>
    );
};

export default Sections;