import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import DashboardNavbar from './DashboardNavbar';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import creadit from '../../Icon/credit-card 1.png';
import paypal from '../../Icon/image 17.png';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51ML3SDDzQTpn1KdsfN3Lhg2V1hn9DfT5wwbwKDrVBexAs0ahrjnf1udo7LuYeAadI0i97SwAkRtSiWGpgBhbSb5o00EH9J5rMD');

const Book = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const { id } = useParams();
    const [order, setOrder] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))

    }, [])
    return (
        <section>
            <DashboardNavbar
                header={'Book'}
                name={user?.displayName}
            ></DashboardNavbar>
            <div className='min-h-screen mr-5 mt-5 bg-slate-200'>

                <div className=''>
                    <form action="">
                        <input type="text" readOnly value={user?.displayName} class="input font-bold text-xl w-96 ml-4 mt-8" />
                        <input type="text" readOnly value={user?.email} class="input font-bold text-xl w-96 ml-4 mt-8" />
                        <input type="text" readOnly value={order?.name} class="input font-bold text-xl w-96 ml-4 mt-8" /><br />

                        <p className='font-bold text-slate-400 mt-10 ml-4 '>Pay With</p>
                        <div className='flex items-center mt-5'>
                            <div className='flex items-center'>
                                <input type="checkbox" class=" ml-4" />
                                <span className='flex items-center ml-4'>
                                    <img className='h-10 mr-2' src={creadit} alt="" />
                                    <small className='font-bold'>Creadit card</small>
                                </span>
                            </div>
                            <div className='flex items-center'>
                                <input type="checkbox" class=" ml-4" />
                                <span className='flex items-center ml-4'>
                                    <img className='h-10 mr-2' src={paypal} alt="" />
                                    <small className='font-bold'>Paypal</small>
                                </span>
                            </div>
                        </div>
                        {/*   <input type="text" placeholder='Card number' class="input text-slate-600 w-96 ml-4 mt-8" />
                        <div className='flex items-center gap-4 w-96 ml-4 mt-3'>
                            <input type="text" placeholder="Type here" class="input w-full max-w-xs" />
                            <input type="text" placeholder="Type here" class="input w-full max-w-xs" />
                        </div> */}
                        <div className='font-bold mt-3 mx-5 py-5'>Your Service charged will be ${order?.price}</div>
                        <Elements className='' stripe={stripePromise}>
                            <CheckoutForm order={order} />
                        </Elements>

                    </form>
                </div>
            </div>

        </section>
    );
};

export default Book;