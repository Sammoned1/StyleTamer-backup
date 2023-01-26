import React, {useContext, useEffect} from 'react';
import ItemList from "../components/ItemList/ItemList";
import {Context} from "../index";
import Footer from "../components/Footer/Footer";

const Bags = () => {
    const {device} = useContext(Context)
    useEffect(() => {
        device.setGender('')
        device.setType(20)
    }, [])

    return (
        <div>
            <div style={{minHeight: '100vh'}}>
                <ItemList title={'Сумки'}/>
            </div>
            <Footer/>
        </div>
    );
};

export default Bags;