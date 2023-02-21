import React, {useContext, useEffect} from 'react';
import ItemList from "../components/ItemList/ItemList";
import {Context} from "../index";
import Footer from "../components/Footer/Footer";
import {observer} from "mobx-react-lite";
import Pages from "../components/Pages/Pages";

const Bags = observer(() => {
    const {device} = useContext(Context)
    const pagesAmount = Math.ceil(device.totalCount / device.limit)
    useEffect(() => {
        device.setGender('')
        device.setSelectedGender({})
        device.setType({id: 3, name: 'Сумки'})
        device.setSelectedType({id: 3, name: 'Сумки'})
        device.setPage(1)
    }, [])

    return (
        <div>
            <ItemList title={'Сумки'}/>
            {pagesAmount > 1 ? <Pages/> : null}
            <Footer/>
        </div>
    );
});

export default Bags;