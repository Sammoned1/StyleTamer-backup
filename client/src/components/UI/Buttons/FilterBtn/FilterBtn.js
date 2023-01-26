import React from 'react';
import classes from './FilterBtn.module.css'

const FilterBtn = ({onClick}) => {
    return (
        <div onClick={onClick} className={classes.filterBtn}>
            <button  className={classes.filterText}>
                Фильтры
            </button>
            <div className={classes.filterIcon}></div>
        </div>
    );
};

export default FilterBtn;