import React, { useEffect, useState } from 'react';
import ReviewDetails from './ReviewDetails';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='mt-11'>
            <h3 className='text-black text-3xl text-center font-bold mt-11 mb-8'>Testimonials </h3>

            <div className='grid gap-4 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-7'>
                {
                    reviews.map(review => <ReviewDetails
                        key={review._id}
                        review={review}
                    ></ReviewDetails>)
                }
            </div>
        </div >
    );
};

export default Testimonials;