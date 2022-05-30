import React from 'react';

const ReviewDetails = ({ review }) => {
    const { name, work, image, description, ratings } = review;
    return (
        <div class="card w-full bg-base-100 shadow-xl px-3">
            <div class="card-body">

                <div class="flex">
                    <div class="w-14 ">
                        <img src={image} alt="imageddd" />
                    </div>
                    <div className='ml-6'>
                        <p className='text-xl font-bold'>{name}</p>
                        <p className='text-slate-600 font-semibold'>{work}</p>
                    </div>
                </div>

            </div>
            <p>{description}</p>
            <div className='pt-5 pb-10'>
                <p>{ratings}</p>
            </div>
        </div>
    );
};

export default ReviewDetails;