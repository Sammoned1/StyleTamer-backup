import React, {useContext, useEffect, useState} from 'react';
import classes from './ItemList.module.css'
import SectionHeader from "../SectionHeader/SectionHeader";
import Item from "../Item/Item";
import {Context} from "../../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";
import LoadingItem from "../Item/LoadingItem/LoadingItem";
import FilterList from "../FilterList/FilterList";
import FilterList2 from "../FilterList/FilterList2";
import FilterBtn from "../UI/Buttons/FilterBtn/FilterBtn";

const ItemList = observer(({title}) => {
    const {device} = useContext(Context)
    const [loaded, setLoaded] = useState(false)
    const [filterActive, setFilterActive] = useState(false)

    useEffect(() => {
        setLoaded(false)
        setTimeout(() => {
            setLoaded(true)
        }, 200)
    }, [device.page])

    return (
        <div className={classes.listPage}>
            <div className={classes.listContainer}>
                <SectionHeader title={title}/>
                <FilterBtn onClick={()=>{
                    if (filterActive)
                        setFilterActive(false)
                    else
                        setFilterActive(true)
                }}/>
                <div className={classes.innerListContainer}>
                    {filterActive ? <FilterList2/> : null}
                    <div className={filterActive ? classes.list + " " + classes.active : classes.list}>
                        {loaded ? device.devices.map((e) =>
                            <Item key={e.id} device={e}/>
                        ) : device.devices.map((e) =>
                            <LoadingItem key={e.id}/>)
                        }
                        {/*{device.devices.map((e) =>*/}
                        {/*    <LoadingItem key={e.id}/>)}*/}
                    </div>
                </div>
            </div>

        </div>
    );
});

export default ItemList;