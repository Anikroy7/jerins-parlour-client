import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const CheckoutForm = ({ order }) => {
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [success, setSuccess] = useState('')

    const [user, loading] = useAuthState(auth);
    const email = user?.email;
    const { price, name } = order;
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        if (price) {
            fetch('http://localhost:5000/create-payment-intent', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ price })
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        setClientSecret(data.clientSecret);
                        console.log(data);
                    }
                })
        }
    }, [price])

    const handleSubmit = async (event) => {
        console.log('ocl');
        event.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (!card) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })

        setCardError(error?.message || '');

        // Confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name,
                        email
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
        } else {

            setCardError('');
            setSuccess(`Congrats! your payment is completed. Your Transaction id: ${paymentIntent.id}`);
            console.log(paymentIntent);
        }


    }

    console.log(clientSecret);
    return (
        <form className='mx-5 bg-white p-5 w-1/2' onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: 'black',
                            '::placeholder': {
                                color: 'black',
                                padding: '10px'
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />

            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }

            {
                success && <p className='text-green-500 font-bold'>{success}</p>
            }
            <button onClick={handleSubmit} disabled={!stripe || !clientSecret} type="submit" class="btn btn-xs mt-5 px-10 btn-secondary">Pay</button>


        </form>
    );
};

export default CheckoutForm;