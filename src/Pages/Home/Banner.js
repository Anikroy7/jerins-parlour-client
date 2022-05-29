import React from 'react';
import girl from '../../Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen mt-0 bg-red-50 px-10">
            <div class="hero-content flex-col lg:flex-row-reverse ml-4">
                <img src={girl} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold uppercase">Beauty selon <br /> for ever women</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-secondary">Get an Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;