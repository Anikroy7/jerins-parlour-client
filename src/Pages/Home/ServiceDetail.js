import React from 'react';
import './ServiceDetail.css'

const ServiceDetail = ({ service }) => {
    const { name, price, description, image } = service;
    return (
        <div data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out" class="w-100 p-9 mt-8 even:shadow-2xl shadow-red-400 bg-base-100 rounded-lg mb-11" >
            <div class="w-full mx-auto ">

                <div className='flex justify-center mb-3'>
                    <img style={{ height: '80px', width: '80px' }} src={image} alt="" />
                </div>

                <div className='text-center'>
                    <p className='text-secondary mb-3 font-bold text-xl
                    '>${price}</p>
                    <p className='text-xl font-bold mb-3'>{name}</p>
                    <p className='text-slate-600'>{description}</p>
                </div>

            </div>
        </div >
    );
};

export default ServiceDetail;