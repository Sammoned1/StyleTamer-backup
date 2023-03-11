import React from 'react';
import classes from './FilterList2.module.css'

const FilterList2 = ({active}) => {
    return (
        <div className={active ? classes.filterBlock + " " + classes.active : classes.filterBlock}>
            <ul>
                <li>Фильтр 1</li>
                <li>Фильтр 2</li>
                <li>Фильтр 3</li>
                <li>Фильтр 4</li>
                <li>Фильтр 5</li>
                <li>Фильтр 6</li>
                <li>Фильтр 7</li>
                <li>Фильтр 8</li>
            </ul>
        </div>
    );
};

export default FilterList2;