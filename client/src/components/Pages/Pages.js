import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import Page from "./Page/Page";
import classes from './Pages.module.css'
import {observer} from "mobx-react-lite";

const Pages = observer(() => {
    const {device} = useContext(Context)
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    const increasePage = () => {
        if (device.page < pageCount) {
            device.setPage(device.page + 1)
        }
    }

    const decreasePage = () => {
        if (device.page > 1) {
            device.setPage(device.page - 1)
        }
    }

    return (
        <div className={classes.pagesInitialContainer}>
            <div className={classes.pageBtn} onClick={() => decreasePage()}>
                <div className={classes.leftPageBtn}></div>
            </div>
            <div className={classes.pagesBlock}>
                {pages.map(page => (
                    <Page key={page} page={page}/>
                ))}
            </div>
            <div className={classes.pageBtn} onClick={() => increasePage()}>
                <div className={classes.rightPageBtn}></div>
            </div>
        </div>
    );
});

export default Pages;