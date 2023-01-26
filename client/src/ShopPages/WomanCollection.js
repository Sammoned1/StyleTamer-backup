import React, {useContext, useEffect} from 'react';
import ItemList from "../components/ItemList/ItemList";
import {fetchDevices} from "../http/deviceAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Footer from "../components/Footer/Footer";

const WomanCollection = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        device.setGender('F')
        device.setType(null)
    }, [])

    return (
        <div>
            <div style={{minHeight: '100vh'}}>
                <ItemList title={'Женская коллекция'}/>
            </div>
            <Footer/>
        </div>

    );
});

export default WomanCollection;