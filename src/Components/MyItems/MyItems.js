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
                {
                    newItem.map(item => <Items
                        key={item._id}
                        item={item}
                    >
                    </Items>)
                }
            </div>
        </div>
    );
};

export default MyItems;