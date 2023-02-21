import React from 'react';
import classes from './FilterBtn.module.css'

const FilterBtn = ({onClick, isActive}) => {
    return (
        <div onClick={onClick} className={isActive ? classes.filterBtn + " " + classes.active :classes.filterBtn}>
            <button  className={classes.filterText}>
                Фильтр
            </button>
            {/*<div className={classes.filterIcon}></div>*/}
        </div>
    );
};

export default FilterBtn;