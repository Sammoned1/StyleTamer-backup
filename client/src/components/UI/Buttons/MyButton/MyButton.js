import React from 'react';
import classes from './MyButton.module.css'

const MyButton = (props) => {
    return (
        <button type={'submit'} className={classes.authBtn} {...props}>
            {props.title}
        </button>
    );
};

export default MyButton;