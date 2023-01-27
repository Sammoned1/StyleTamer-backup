import React, {useContext, useEffect} from 'react';
import ItemList from "../components/ItemList/ItemList";
import Footer from "../components/Footer/Footer";
import {Context} from "../index";
import Pages from "../components/Pages/Pages";
import {observer} from "mobx-react-lite";

const Clothes = observer(() => {
    const {device} = useContext(Context)
    const pagesAmount = Math.ceil(device.totalCount / device.limit)

    useEffect(() => {
        device.setGender('')
        device.setType(5)
        device.setPage(1)
    }, [])


    return (
        <div>
            <div style={{minHeight: '100vh'}}>
                <ItemList title={'Одежда'}/>
            </div>
            {pagesAmount > 1 ? <Pages/> : null}
            <Footer/>
        </div>
    );
});

export default Clothes;