import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {

    const { serviceId } = useParams();

    return (
        <div className='h-screen'>
            <h2>Please checkout</h2>
        </div>
    );
};

export default CheckOut;