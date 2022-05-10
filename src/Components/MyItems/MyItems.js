import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Items from '../../Items/Items';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItem, setMyItem] = useState([]);

    useEffect(() => {
        const email = user.email;
        const url = `https://shrouded-sands-14035.herokuapp.com/items?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyItem(data));

    }, [user])

    const newItem = myItem.filter(item => item.email === user.email);
    return (
        <div>
            <div>
                <h1 className="secondary-title text-4xl font-bold mt-8 mb-5 text-center text-red-600">My Items</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mb-5 p-5 mx-auto items-center'>
                <div className='grid grid-cols-1 gap-5 mb-5 p-5 mx-auto items-center border border-red-500 rounded-lg'>
                    {
                        newItem.map(item => <Items
                            key={item._id}
                            item={item}
                        >
                        </Items>)
                    }
                    <button type="button" className="secondary-title inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyItems;