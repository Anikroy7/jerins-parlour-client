import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    console.log(reviews);


    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='mt-11'>
            <h3 className='text-black text-3xl text-center font-bold mt-11 mb-8'>Testimonials </h3>

            <div className='px-4'>
                <>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        slidesPerGroup={3}

                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper w-full"
                    >
                        {
                            reviews.map(review => <SwiperSlide className='py-10'>
                                <div class="card bg-base-100 shadow-xl px-3">
                                    <div class="card-body">
                                        <div class="flex">
                                            <div class="w-14 ">
                                                <img src={review.image} alt="imageddd" />
                                            </div>
                                            <div className='ml-6'>
                                                <p className='text-xl font-bold'>{review.name}</p>
                                                <p className='text-slate-600 font-semibold'>{review.work}</p>
                                            </div>
                                        </div>

                                    </div>
                                    <p>{review.description}</p>
                                    <div className='pt-5 pb-10'>
                                        <p>{review.ratings}</p>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper></>
            </div>
        </div >
    );
};

export default Testimonials;