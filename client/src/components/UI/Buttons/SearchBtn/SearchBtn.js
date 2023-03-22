import React from 'react';
import classes from "./SearchBtn.module.css";

const SearchBtn = (props) => {
    return (
        <div className={classes.searchIconContainer} {...props}>
            {/*<div className={classes.searchBar}></div>*/}
        </div>
    );
};

export default SearchBtn;