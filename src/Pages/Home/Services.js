import React, { useEffect, useState } from 'react';
import ServiceDetail from './ServiceDetail';

const Services = () => {

    const [Services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='mt-10'>
            <h3 className='text-center mt-8 mb-8'><span className='text-black text-3xl font-bold'>Our Awsome</span> <span className='text-secondary text-3xl font-bold ml-2'>Services </span></h3>

            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    Services.map(service => <ServiceDetail

                        key={service._id}
                        service={service}
                    ></ServiceDetail>)
                }
            </div>
            <div className='text-center'>
                <button class="btn btn-sm px-6 btn-secondary">Explore more</button>
            </div>
        </div >
    );
};

export default Services;