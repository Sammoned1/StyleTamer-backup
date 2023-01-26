import React from 'react';
import Basket from "../components/Basket/Basket";
import Footer from "../components/Footer/Footer";

const BasketPage = () => {
    return (
        <div>
            <div style={{width: 1600, height: 'auto', minHeight: '100vh', margin: '0 auto'}}>
                <Basket/>
            </div>
            <Footer/>
        </div>
    );
};

export default BasketPage;