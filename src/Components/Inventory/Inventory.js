import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetail from '../../Hooks/useItemDetail';

const Inventory = () => {
    const { itemId } = useParams();
    console.log(itemId);
    const [item] = useItemDetail(itemId);
    const { _id, name, image, description, price, quantity, supplier } = item;
    return (
        <div>
            <div>
                <h1 className="secondary-title text-3xl font-bold mt-8 mb-2 text-center text-red-600">{name}</h1>
            </div>
            <div className='mx-auto p-8'>
                <div className="flex flex-wrap justify-center">
                    <img
                        src={image}
                        className="p-1 bg-white hover:scale-110 transition duration-300 ease-in-out border rounded-lg max-w-sm"
                        alt="..."
                    />
                </div>
                <div className='p-5'>
                    <p className='description text-gray-700 text-base my-5'>
                        <span className='font-semibold'>Product-Id: </span> {_id}
                    </p>
                    <p className='description text-gray-700 text-base my-5'>
                        <span className='font-semibold'>Description: </span> {description}
                    </p>
                    <p className='description text-gray-700 text-base my-5'>
                        <span className='font-semibold'>Quanity: </span> {quantity}
                    </p>
                    <p className='description text-gray-700 text-base my-5'>
                        <span className='font-semibold'>Supplier: </span> {supplier}
                    </p>
                    <p className='description text-gray-700 text-base my-5 text-red-500'>
                        <span className='font-semibold text-gray-700'>Price: </span> {price}
                    </p>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;