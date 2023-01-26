import React, {useContext, useEffect} from 'react';
import ItemList from "../components/ItemList/ItemList";
import Footer from "../components/Footer/Footer";
import {Context} from "../index";
import Pages from "../components/Pages/Pages";

const Boots = () => {
    const {device} = useContext(Context)
    const pagesAmount = Math.ceil(device.totalCount / device.limit)
    useEffect(() => {
        device.setGender('')
        device.setType(16)
    }, [])

    return (
        <div>
            <div style={{minHeight: '100vh'}}>
                <ItemList title={'Обувь'}/>
            </div>
            {pagesAmount > 1 ? <Pages/> : null}
            {/*проверка гита*/}
            {/*Второй коммент*/}
            <Footer/>
        </div>
    );
};

export default Boots;