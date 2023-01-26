import React from 'react';
import classes from './ItemDescriptionTitle.module.css'

const ItemDescriptionTitle = ({title}) => {
    return (
        <div className={classes.itemDescriptionTitle}>
            {title}
        </div>
    );
};

export default ItemDescriptionTitle;