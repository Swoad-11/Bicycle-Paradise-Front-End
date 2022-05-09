import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Items = ({ item }) => {
    const { _id, name, image, description, price, quantity, supplier } = item;
    const navigate = useNavigate();

    const navigateToInventory = id => {
        navigate(`/inventory/${_id}`);
    }
    return (
        <div>
            <div className="flex justify-center">
                <div className="rounded-lg shadow-lg bg-red-100 w-80">
                    <img src={image} className="max-w-full h-80 rounded-lg p-1" alt="" />
                    <div className="p-6">
                        <h5 className="secondary-title text-gray-900 text-xl font-medium mb-2 overflow-hidden truncate"> {name} </h5>
                        <p className="description text-gray-700 text-base mb-4 overflow-hidden truncate">
                            {description}
                        </p>
                        <p className="description text-gray-700 text-base mb-4">
                            Price: {price}
                        </p>
                        <p className="description text-gray-700 text-base mb-4">
                            Supplier Name: {supplier}
                        </p>
                        <p className="description text-gray-700 text-base mb-4">
                            Quantity: {quantity}
                        </p>
                        <button onClick={() => navigateToInventory(_id)} type="button" className="secondary-title inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;
