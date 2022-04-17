import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {

    const { id, name, description, price, img } = service;
    const navigate = useNavigate();

    const navigateToCheckout = (id) => {
        navigate("/checkout");

    }


    return (
        <div>
            <div class="flex justify-center">
                <div class="rounded-lg shadow-xl bg-white max-w-sm">
                    <img class="rounded-t-lg h-[12rem] mx-auto" src={img} alt="" />
                    <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-semibold uppercase font-sans mb-4">{name}</h5>
                        <p class="text-gray-600 text-base mb-4">
                            {description}
                        </p>
                        <h5 class="text-gray-900 text-xl font-medium mb-3">Charge: ${price}</h5>
                        <button onClick={() => navigateToCheckout(id)} type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-800 focus:shadow-lg active:bg-blue-800 active:shadow-lg">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;