import React from 'react';
import Banner from '../Banner/Banner';
import GeniusCoaching from '../GeniusCoaching/GeniusCoaching';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <GeniusCoaching></GeniusCoaching>
        </div>
    );
};

export default Home;