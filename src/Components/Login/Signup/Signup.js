import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Loading/Loading';


const Signup = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/home');
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }
    return (
        <div>
            <div className="description block p-6 rounded-lg shadow-lg bg-white max-w-sm my-8 mx-auto border-2">
                <form onSubmit={handleRegister}>
                    <label htmlFor="Name" className="form-label inline-block mb-2 text-gray-700">Name</label>
                    <input type="text" className='block mb-2 w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none' name="name" id="" placeholder='Your Name' />
                    <label htmlFor="Email" className="form-label inline-block mb-2 text-gray-700">Email Address</label>
                    <input type="email" className='block mb-2 w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none' name="email" id="" placeholder='Email Address' required />
                    <label htmlFor="Password" className="form-label inline-block mb-2 text-gray-700">Password</label>
                    <input type="password" className='block mb-2 w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none' name="password" id="" placeholder='Password' required />
                    <div className='grid grid-cols-1'>
                        <div className='my-5'>
                            <input onClick={() => setAgree(!agree)} className='mx-2' type="checkbox" name="terms" id="terms" />
                            <label className={`ps-2 ${agree ? '' : 'text-blue-700'}`} htmlFor="terms">Accept Our Terms and Conditions</label>
                        </div>
                        <input
                            disabled={!agree}
                            className=' w-full px-6 py-2.5 mb-5 bg-red-600 text-white font- text-lg leading-tight rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out'
                            type="submit"
                            value="Register" />
                    </div>
                </form>
                <p>Already have an account? <Link to="/login" className='text-red-500 mx-3' onClick={navigateLogin}>Please Login</Link> </p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Signup;