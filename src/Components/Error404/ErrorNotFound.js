import React from 'react';
import errorImg from '../../images/error.png'

const ErrorNotFound = () => {
    return (
        <div>
            <div class="flex flex-wrap justify-center bg-red-400">
                <img
                    src={errorImg}
                    class="max-w-sm h-auto"
                    alt=""
                />
            </div>
        </div>
    );
};

export default ErrorNotFound;