import React from 'react';


import './Service.css'
import { useNavigate } from 'react-router-dom';

const Service = () => {
    const navigate = useNavigate();

    const navigateToServiceDetail = () => {
        navigate('/servicedetail');
    }
    return (
        <div>

        </div>
    );
};

export default Service;