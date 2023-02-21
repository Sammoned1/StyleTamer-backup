import React from 'react';
import classes from './FilterList2.module.css'

const FilterList2 = ({active}) => {
    return (
        <div className={active ? classes.filterBlock + " " + classes.active : classes.filterBlock}>
            
        </div>
    );
};

export default FilterList2;