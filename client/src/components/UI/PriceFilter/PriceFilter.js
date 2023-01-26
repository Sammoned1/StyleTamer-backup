import React, {useMemo, useState} from 'react';
import classes from './PriceFilter.module.css'
import MyInput from "../Inputs/MyInput/MyInput";

const PriceFilter = ({active}) => {
    const [minPrice, setMinPrice] = useState('1000')
    const [maxPrice, setMaxPrice] = useState('50000')


    const setPriceDefault = useMemo(()=>{
        if(!active){
            setMinPrice('1000')
            setMaxPrice('50000')
        }
    }, [active])

    return (
        <div className={classes.priceFilter}>
            <div className={classes.priceFilterText}>Фильтры</div>
            <hr/>
            <div className={classes.priceFilterLine}>
                <div className={classes.priceBlock}>
                    <input type="text" className={classes.priceInput}
                           value={minPrice}
                           onChange={i => {
                               setMinPrice(i.target.value)
                           }}/>
                </div>
                <div className={classes.priceFilterRange}>
                    <input className='priceRange' type="range" min={minPrice} max={'300000'} step={'500'} value={maxPrice}
                           onChange={(e) => {
                               setMaxPrice(e.target.value)
                           }}/>
                </div>
                <div className={classes.priceBlock}>
                    <input type="text" className={classes.priceInput} value={maxPrice} onChange={i => {
                        setMaxPrice(i.target.value)
                    }}/>
                </div>
            </div>
            <hr/>
        </div>
    );
};

export default PriceFilter;