import React, {useContext, useEffect, useState} from 'react';
import ItemPhotoSection from "../components/Item/ItemPhotoSection/ItemPhotoSection";
import ItemInfoSection from "../components/Item/ItemInfoSection/ItemInfoSection";
import '../styles/reset.css'
import ItemDescription from "../components/Item/ItemDescription/ItemDescription";
import Footer from "../components/Footer/Footer";
import Slider from "../components/Slider/Slider";
import Reviews from "../components/Reviews/Reviews";
import Item from "../components/Item/Item";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useParams} from "react-router-dom";
import {fetchDevices, fetchOneDevice} from "../http/deviceAPI";
import data from "bootstrap/js/src/dom/data";
import FindMoreItems from "../components/Item/FindMoreItems/FindMoreItems";

const DevicePage = observer(() => {
    const {device} = useContext(Context)
    const [selectedDevice, setSelectedDevice] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        fetchOneDevice(id).then(data => setSelectedDevice(data))
    }, [])

    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [])

    return (
        <div>
            <div style={{
                width: '1400px',
                margin: '0 auto',
                paddingTop: '80px',
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <ItemPhotoSection device={selectedDevice}/>
                    <ItemInfoSection device={selectedDevice}/>
                </div>
                <ItemDescription/>
                <Reviews/>
            </div>
            {/*<Slider title={'С этим также берут'}>*/}
            {/*    {device.devices.map((e)=>*/}
            {/*        <Item key={e.id} device={e}/>*/}
            {/*    )}*/}
            {/*    /!*<FindMoreItems title={'Больше похожих товаров'}/>*!/*/}
            {/*</Slider>*/}
            <Footer/>
        </div>
    );
});

export default DevicePage;