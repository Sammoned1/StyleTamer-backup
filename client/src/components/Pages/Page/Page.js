import React, {useContext, useEffect} from 'react';
import classes from './Page.module.css'
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";

const Page = observer(({page}) => {
    const {device} = useContext(Context)
    return (
        <div className={device.page === page ? classes.page + " " + classes.active : classes.page} onClick={()=>{
            device.setPage(page)
        }}>
            {page}
        </div>
    );
});

export default Page;