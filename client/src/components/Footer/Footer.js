import React from 'react';
import classes from './Footer.module.css'
import Logo from "../Logo/Logo";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <Logo/>
            <div className={classes.footerLine}></div>

            <div className={classes.footerInfo}>
            </div>
        </div>
    );
};

export default Footer;