import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import GeniusCoaching from '../GeniusCoaching/GeniusCoaching';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <GeniusCoaching></GeniusCoaching>
            <Footer></Footer>
        </div>
    );
};

export default Home;