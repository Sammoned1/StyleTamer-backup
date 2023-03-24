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
        device.setGender({id: 2,title: 'М'})
        device.setSelectedGender({id: 2,title: 'М'})
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
            <ItemList title={'Мужская коллекция'}/>
            {pagesAmount > 1 ? <Pages/> : null}
            <Footer/>
        </div>
    );
});

export default ManCollection;