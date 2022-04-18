import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {

    const { serviceId } = useParams();

    return (
        <div className='h-screen'>
            <h2 className='text-xl mt-5 font-medium'>Please checkout</h2>
        </div>
    );
};

export default CheckOut;