import React, {useContext, useEffect} from 'react';
import Slider from "../components/Slider/Slider";
import Footer from "../components/Footer/Footer";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import Sections from "../components/GenderSections/Sections";
import Item from "../components/Item/Item";
import FindMoreItems from "../components/Item/FindMoreItems/FindMoreItems";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import {observer} from "mobx-react-lite";
import MainBanner from "../components/MainBanner/MainBanner";

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        device.setGender('')
        device.setType(null)
    }, [])

    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [])

    return (
        <div>
            <MainBanner/>
            {/*{device.devices.length ? <Slider title={'Новинки'}>*/}
            {/*    {device.devices.slice(0,8).map((e) =>*/}
            {/*        <Item key={e.id} device={e}/>*/}
            {/*    )}*/}
            {/*    /!*<FindMoreItems title={'Больше новых товаров'}/>*!/*/}
            {/*</Slider> : null}*/}
            {/*{device.devices.length ?*/}
            {/*    <Slider title={'Популярное'}>*/}
            {/*        {device.devices.slice(0,8).map((e) =>*/}
            {/*            <Item key={e.id} device={e}/>*/}
            {/*        )}*/}
            {/*        /!*<FindMoreItems title={'Больше популярных товаров'}/>*!/*/}
            {/*    </Slider> : null}*/}
            <Footer/>
        </div>
    );
});

export default Shop;