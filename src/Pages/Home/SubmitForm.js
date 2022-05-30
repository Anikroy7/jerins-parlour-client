import React from 'react';

const SubmitForm = () => {
    return (
        <div className='bg-red-100 mt-32 text-center p-20'>
            <h1 class="text-4xl font-bold ">
                <p className=''>Let us Give Your  </p>
                <p className='text-secondary mt-'>Short Infomation</p>
            </h1>
            <section className='mt-10'>
                <div className='d-flex'>
                    <input type="text" placeholder="Full name" class="input w-full max-w-xs mr-4" />
                    <input type="text" placeholder="Last name" class="input w-full max-w-xs" />
                </div>

                <div className='d-flex mt-5'>
                    <input type="emial" placeholder="Email Address" class="input w-full max-w-xs mr-4" />
                    <input type="number" placeholder="Phone number" class="input w-full max-w-xs" />
                </div>
                <div className='d-flex w-full mt-5  px-24'>
                    <textarea type="text" placeholder="Your message" class="input w-full h-28 mr-4" />

                </div>


            </section>
            <div className='text-center mt-4'>
                <button class="btn px-6 btn-secondary">Send Message</button>
            </div>
        </div>
    );
};

export default SubmitForm;