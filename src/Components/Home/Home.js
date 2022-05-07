import React from 'react';
import Intro from '../Intro/Intro';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';

import './Home.css';
import Review from '../Review/Review';
import Joinus from '../Joinus/Joinus';



const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Intro></Intro>
            <Service></Service>
            <Review></Review>
            <Joinus></Joinus>
        </>
    );
};

export default Home;