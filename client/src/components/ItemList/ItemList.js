import React, {useContext, useEffect, useState} from 'react';
import classes from './ItemList.module.css'
import SectionHeader from "../SectionHeader/SectionHeader";
import Item from "../Item/Item";
import {Context} from "../../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";
import LoadingItem from "../Item/LoadingItem/LoadingItem";

const ItemList = observer(({title}) => {
    const {device} = useContext(Context)
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        setLoaded(false)
        setTimeout(()=>{
            setLoaded(true)
        }, 200)
    },[device.page])

    return (
        <div className={classes.listPage}>
            <SectionHeader title={title}/>
            <div className={classes.list}>
                {loaded ? device.devices.map((e)=>
                    <Item key={e.id} device={e}/>
                ) : device.devices.map(()=>
                    <LoadingItem/>)
                }
            </div>
        </div>
    );
});

export default ItemList;