import React, { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import useItems from '../../Hooks/useItems';
import Items from '../../Items/Items';


const Service = () => {
    const [items, setItems] = useItems();


    const lessItems = items.slice(0, 6);
    const navigate = useNavigate();

    const navigateInventory = () => {
        navigate('/inventory');
    }
    return (
        <div>
            <hr className='h-0 my-8 border border-solid border-t-0 border-red-400 w-3/5 mx-auto' />
            <div>
                <h1 className="secondary-title text-4xl font-bold mt-8 mb-5 text-center text-red-600">Items</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mb-5 p-5 mx-auto items-center'>
                {
                    lessItems.map(item => <Items
                        key={item._id}
                        item={item}
                    >
                    </Items>)
                }
            </div>


            <div className='flex space-x-2 justify-center'>
                <Link to="/manageinventory">
                    <button type="button" className="secondary-title inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Manage Inventory</button>
                </Link>
            </div>
        </div >
    );
};

export default Service;