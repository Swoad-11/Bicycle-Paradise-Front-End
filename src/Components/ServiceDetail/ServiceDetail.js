import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
    return (
        <div>
            <h2 className='text-center'>Service Detail: </h2>
            <h4 className='text-center'>We will provide our best effort to give you the best items for all type of services mentioned.</h4>
            <div className='text-center my-5'>
                <Link to="/checkout">
                    <button style={{ width: '18rem' }} className='btn btn-text btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;