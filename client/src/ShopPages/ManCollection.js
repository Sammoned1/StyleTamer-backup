import React, {useContext, useEffect} from 'react';
import ItemList from "../components/ItemList/ItemList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Footer from "../components/Footer/Footer";
import Pages from "../components/Pages/Pages";

const ManCollection = observer(() => {
    const {device} = useContext(Context)
    const pagesAmount = Math.ceil(device.totalCount / device.limit)

    useEffect(() => {
        device.setGender('M')
        device.setType(null)
        device.setPage(1)
    }, [])

    return (
        <div>
            <div style={{minHeight: '100vh'}}>
                <ItemList title={'Мужская коллекция'}/>
            </div>
            {pagesAmount > 1 ? <Pages/> : null}
            <Footer/>
        </div>
    );
});

export default ManCollection;