import React, {useContext, useEffect} from 'react';
import ItemList from "../components/ItemList/ItemList";
import {Context} from "../index";
import Footer from "../components/Footer/Footer";

const Jewellery = () => {
    const {device} = useContext(Context)
    useEffect(() => {
        device.setGender('')
        device.setType(21)
    }, [])

    return (
        <div>
            <div style={{minHeight: '100vh'}}>
                <ItemList title={'Украшения'}/>
            </div>
            <Footer/>
        </div>
    );
};

export default Jewellery;