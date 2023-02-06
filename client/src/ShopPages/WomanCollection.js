import React, {useContext, useEffect} from 'react';
import ItemList from "../components/ItemList/ItemList";
import {fetchDevices} from "../http/deviceAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Footer from "../components/Footer/Footer";
import Pages from "../components/Pages/Pages";

const WomanCollection = observer(() => {
    const {device} = useContext(Context)
    const pagesAmount = Math.ceil(device.totalCount / device.limit)

    useEffect(() => {
        device.setGender({id: 1,title: 'F'})
        device.setSelectedGender({id: 1,title: 'F'})
        device.setType(null)
        device.setSelectedType({})
        device.setPage(1)
    }, [])

    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [])

    return (
        <div>
            <div style={{minHeight: '100vh'}}>
                <ItemList title={'Женская коллекция'}/>
            </div>
            {pagesAmount > 1 ? <Pages/> : null}
            <Footer/>
        </div>

    );
});

export default WomanCollection;