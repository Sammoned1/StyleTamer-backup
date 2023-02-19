import React from 'react';
import Profile from "../components/Profile/Profile";
import Footer from "../components/Footer/Footer";

const ProfilePage = () => {
    return (
        <div>
            <div style={{display: 'flex', width: 1600, margin: '88px 8%'}}>
                <Profile/>
            </div>
            <Footer/>
        </div>


    );
};

export default ProfilePage;