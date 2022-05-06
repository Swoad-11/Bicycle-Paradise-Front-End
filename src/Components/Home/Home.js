import React from 'react';
import Intro from '../Intro/Intro';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';

import './Home.css';



const Home = () => {
    return (
        <>
            <Intro></Intro>
            <Banner></Banner>
            <Service></Service>
        </>
    );
};

export default Home;