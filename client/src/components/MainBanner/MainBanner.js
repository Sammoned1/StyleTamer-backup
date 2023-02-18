import React from 'react';
import classes from './MainBanner.module.css'

const MainBanner = () => {
    return (
        <div className={classes.mainBanner}>
            <div className={classes.bannerInfoBlock}>
                <div className={classes.bannerLogo}>
                    Nike Jordan 1
                </div>
                <div className={classes.bannerInfo}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda dolore id magni neque
                    reiciendis. Excepturi, incidunt, natus! Dolorem, facilis.
                </div>
            </div>
        </div>
    );
};

export default MainBanner;