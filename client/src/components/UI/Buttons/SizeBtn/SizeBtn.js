import React from 'react';
import classes from './SizeBtn.module.css'

const SizeBtn = ({size}) => {
    return (
        <button className={classes.sizeBtn}>
            {size}
        </button>
    );
};

export default SizeBtn;