import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useWatch } from 'react-hook-form';
import auth from '../../firebase.init';
import DashboardNavbar from './DashboardNavbar';

const BookingList = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth)
    console.log(user);
    const email = user?.email;

    useEffect(() => {
        fetch(`http://localhost:5000/order/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <section>
            <DashboardNavbar
                header={'Booking List'}
            ></DashboardNavbar>
            <div className=' min-h-screen bg-slate-200 p-5'>

                <div className='flex gap-6'>
                    {
                        orders.map(order => <div class="card w-full bg-base-100 shadow-xl">
                            <div class="card-body">
                                <div className='flex justify-between'>
                                    <img className='h-14' src={order?.image} alt="" />
                                    <button class={
                                        order.paid ? "btn btn-success btn-sm text-white" : 'btn btn-error btn-sm text-white '
                                    }>{order.paid ? 'Done' : 'Pending..'}</button>
                                </div>
                                <div className='mt-9'>
                                    <h2 class="card-title font-bold">{order.name}</h2>
                                    <p className='mt-3 font-semibold text-slate-500'>{order.description}</p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default BookingList;