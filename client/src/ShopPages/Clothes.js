import React, {useContext, useEffect} from 'react';
import ItemList from "../components/ItemList/ItemList";
import Footer from "../components/Footer/Footer";
import {Context} from "../index";

const Clothes = () => {
    const {device} = useContext(Context)

    useEffect(() => {
        device.setGender('')
        device.setType(5)
    }, [])


    return (
        <div>
            <div style={{minHeight: '100vh'}}>
                <ItemList title={'Одежда'}/>
            </div>
            <Footer/>
        </div>
    );
};

export default Clothes;