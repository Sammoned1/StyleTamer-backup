import React, {useContext, useEffect} from 'react';
import ItemList from "../components/ItemList/ItemList";
import {Context} from "../index";
import Footer from "../components/Footer/Footer";
import Pages from "../components/Pages/Pages";

const Jewellery = () => {
    const {device} = useContext(Context)
    const pagesAmount = Math.ceil(device.totalCount / device.limit)

    useEffect(() => {
        device.setGender('')
        device.setSelectedGender({})
        device.setType({id: 4, name: 'Украшения'})
        device.setSelectedType({id: 4, name: 'Украшения'})
        device.setPage(1)
    }, [])

    return (
        <div>
            <ItemList title={'Украшения'}/>
            {pagesAmount > 1 ? <Pages/> : null}
            <Footer/>
        </div>
    );
};

export default Jewellery;