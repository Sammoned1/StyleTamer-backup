import React, {useContext, useEffect} from 'react';
import ItemList from "../components/ItemList/ItemList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Footer from "../components/Footer/Footer";

const ManCollection = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        device.setGender('M')
        device.setType(null)
    }, [])

    return (
        <div>
            <ItemList title={'Мужская коллекция'}/>
            <Footer/>
        </div>
    );
});

export default ManCollection;