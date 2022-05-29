import React from 'react';
import makeup from '../../Image/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'

const Profession = () => {
    return (
        <div class="hero min-h-screen bg-red-50 mt-20 p-10">
            <div class="hero-content flex-col lg:flex-row">
                <img className='mr-16 mb-8' style={{ height: '300px' }} src={makeup} class="max-w-sm rounded-lg shadow-2xl" alt='iamge' />
                <div>
                    <h1 class="text-4xl font-bold ">
                        <p className=''>Let us handel your  </p>
                        <p className=''>for <span className='text-secondary'>Professionally</span></p></h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div class="stats bg-primary text-primary-content">

                        <div class="stat bg-red-50">

                            <div class="stat-value text-secondary mb-6">500 +</div>
                            <div class="stat-title">Happy Cutomer</div>

                        </div>
                        <div class="stat bg-red-50">

                            <div class="stat-value text-secondary mb-6">16 +</div>
                            <div class="stat-title">Total Service</div>

                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profession;