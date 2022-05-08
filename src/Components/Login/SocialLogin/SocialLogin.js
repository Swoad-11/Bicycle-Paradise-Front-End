import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    let errorElement;

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-red-600'>Error: {error?.message}</p>
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div className='description'>
            <div className=' flex items-center'>
                <div style={{ height: '1px' }} className='bg-red-600 w-48'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-red-600 w-48'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="bg-white border-2 rounded-lg hover:bg-red-600 mx-auto text-lg flex items-center gap-4 px-8 py-2.5 mb-2 text-red-500 hover:text-white font-medium leading-tight shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="w-4 h-4">
                        <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                    </svg> <p>Google Login</p>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;