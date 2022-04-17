import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className='mx-10 md:mx-20'>
            <h2 className='text-2xl md:text-4xl pt-5 md:pt-12 font-semibold uppercase font-serif text-blue-800'>Connect with Jay Shetty</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-5 md:py-14'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;