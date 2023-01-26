import React, {useContext, useEffect} from 'react';
import ItemList from "../components/ItemList/ItemList";
import {Context} from "../index";
import Footer from "../components/Footer/Footer";
import Pages from "../components/Pages/Pages";

const Catalogue = () => {
    const {device} = useContext(Context)
    const pagesAmount = Math.ceil(device.totalCount / device.limit)
    useEffect(() => {
        device.setGender('')
        device.setType(null)
    }, [])

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <ItemList title={'Каталог'}/>
            {pagesAmount > 1 ? <Pages/> : null}
            <Footer/>
        </div>
    );
};

export default Catalogue;