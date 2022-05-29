import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from './Banner';
import Profession from './Profession';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
            <Profession></Profession>
        </div>
    );
};

export default Home;