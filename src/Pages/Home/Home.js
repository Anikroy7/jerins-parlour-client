import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from './Banner';
import Profession from './Profession';
import Services from './Services';
import SubmitForm from './SubmitForm';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
            <Profession></Profession>
            <Testimonials></Testimonials>
            <SubmitForm></SubmitForm>
        </div>
    );
};

export default Home;