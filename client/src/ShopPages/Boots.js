import React, {useContext, useEffect} from 'react';
import ItemList from "../components/ItemList/ItemList";
import Footer from "../components/Footer/Footer";
import {Context} from "../index";

const Boots = () => {
    const {device} = useContext(Context)
    useEffect(() => {
        device.setGender('')
        device.setType(16)
    }, [])

    return (
        <div>
            <div style={{minHeight: '100vh'}}>
                <ItemList title={'Обувь'}/>
            </div>
            <Footer/>
        </div>
    );
};

export default Boots;