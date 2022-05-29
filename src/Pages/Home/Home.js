import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from './Banner';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;