import React, {useContext, useEffect} from 'react';
import ItemList from "../components/ItemList/ItemList";
import {Context} from "../index";
import Footer from "../components/Footer/Footer";
import Pages from "../components/Pages/Pages";
import {observer} from "mobx-react-lite";

const Catalogue = observer(() => {
    const {device} = useContext(Context)
    const pagesAmount = Math.ceil(device.totalCount / device.limit)
    useEffect(() => {
        device.setGender('')
        device.setType(null)
        device.setPage(1)
    }, [])

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{minHeight: '100vh'}}><ItemList title={'Каталог'}/></div>
            {pagesAmount > 1 ? <Pages/> : null}
            <Footer/>
        </div>
    );
});

export default Catalogue;