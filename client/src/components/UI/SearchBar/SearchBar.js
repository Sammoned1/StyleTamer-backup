import React from 'react';
import classes from './SearchBar.module.css'

const SearchBar = () => {
    return (
        <div className={classes.searchBar}>
            <input className={classes.searchInput} type="text" placeholder="Поиск товаров"/>
            <div className={classes.searchIcon}></div>
        </div>
    );
};

export default SearchBar;
