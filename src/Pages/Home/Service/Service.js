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
                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!">
                        <img class="rounded-t-lg" src={img} alt="" />
                    </a>
                    <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">{name}</h5>
                        <p class="text-gray-700 text-base mb-4">
                            {description}
                        </p>
                        <h5 class="text-gray-900 text-xl font-medium mb-2">Charge: ${price}</h5>
                        <button onClick={() => navigateToCheckout(id)} type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;