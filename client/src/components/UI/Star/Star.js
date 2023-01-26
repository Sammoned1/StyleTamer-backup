import React from 'react';
import classes from './Star.module.css'

const Star = ({golden = false, black = false}) => {
    return (
        <div className={golden
                ? classes.golden + ' ' + classes.star
                : black
                    ? classes.black + ' ' + classes.star
                    : classes.star}>
        </div>
    );
};

export default Star;