import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';
;

const ServiceDetail = ({ service }) => {
    const { name, price, description, image } = service;
    const orderedItem = {
        name, price, description, image
    }
    const handelBooking = () => {
        fetch('http://localhost:5000/order', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderedItem),
        })
            .then(response => response.json())
            .then(data => {

                if (data.upsertedCount > 0) {
                    toast.success('Your order is added on booklist')
                }
                else (
                    toast.error('Your Order is already added')
                )
            })
    }
    return (
        <div data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            class="w-100 hover:shadow-2xl hover:transfrom- p-9 mt-8 shadow-red-400 bg-base-100 rounded-lg mb-11" >
            <div class="w-full mx-auto ">

                <div className='flex justify-center mb-3'>
                    <img style={{ height: '80px', width: '80px' }} src={image} alt="" />
                </div>

                <div className='text-center'>
                    <p className='text-secondary mb-3 font-bold text-xl
                    '>${price}</p>

                    <p className='text-xl font-bold mb-3'>{name}</p>
                    <p className='text-slate-600'>{description}</p>
                    <p><button onClick={handelBooking} className='btn btn-sm btn-secondary mt-5'><FontAwesomeIcon className='mr-4' icon={faShoppingCart}></FontAwesomeIcon>Book Now</button></p>
                </div>

            </div>
        </div >
    );
};

export default ServiceDetail;