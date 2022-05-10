import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddItems = () => {

    const [item, setItem] = useState([])

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = 'http://localhost:5000/cars';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {

                const newItem = [...item, data];
                setItem(newItem);
            })
    };

    return (
        <div>
            <div>
                <h1 className="secondary-title text-4xl font-bold mt-8 mb-5 text-center text-red-600">Add Items</h1>
            </div>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("image")} />
                <input type="submit" value="Add Car" />
            </form>
        </div>
    );
};

export default AddItems;