import React from 'react';
import classes from './SearchBar.module.css'

const SearchBar = ({barActive}) => {
    return (
        <div className={barActive ? classes.searchBar + " " + classes.active : classes.searchBar}>
            <input className={classes.searchInput} type="text" placeholder="Поиск товаров..."/>
            <div className={classes.searchIcon}>
                Поиск
            </div>
        </div>
    );
};

export default SearchBar;
