import React from 'react';
import classes from './Page.module.css'

const Page = ({page}) => {
    return (
        <div className={classes.page}>
            {page}
        </div>
    );
};

export default Page;