import React from 'react';
import classes from './ToolBtn.module.css'

const ToolBtn = (props) => {
    return (
        <button disabled={props.disabled} className={classes.toolBtn} {...props}>{props.title}</button>
    );
};

export default ToolBtn;