import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import logo from '../../images/logo.png';

import { Link } from 'react-router-dom';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='header'>
            <nav
                className="relative w-full flex items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light"
            >
                <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                    <button
                        className="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent1"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="bars"
                            className="w-6"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path
                                fill="currentColor"
                                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                            ></path>
                        </svg>
                    </button>
                    <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent1">
                        <Link to="/home" className="flex items-center">
                            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
                            <span className="title self-center text-2xl font-semibold whitespace-nowrap hover:text-red-500">Bicycle Paradise</span>
                        </Link>
                        <ul className="secondary-title navbar-nav flex flex-wrap justify-between items-center mx-auto flex-col pl-0 list-style-none mr-auto">

                            <li className="nav-item p-2">
                                <CustomLink className="nav-link text-white py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent" to="/Home">Home</CustomLink>
                            </li>
                            <li className="nav-item p-2">
                                <CustomLink className="nav-link text-white py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent" to="/blogs">Blogs</CustomLink>
                            </li>
                            <li className="nav-item p-2">
                                <CustomLink className="nav-link text-white py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent" to="about">About</CustomLink>
                            </li>

                        </ul>

                    </div>



                    <div className="flex items-center relative">

                        <div class="dropdown relative">
                            <a
                                class="text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4 dropdown-toggle hidden-arrow flex items-center"
                                href="#"
                                id="dropdownMenuButton1"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="bell"
                                    class="w-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
                                    ></path>
                                </svg>
                                <span
                                    class="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5"
                                >1</span
                                >
                            </a>
                            <ul
                                class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
                                aria-labelledby="dropdownMenuButton1"
                            >
                                <li>
                                    <a
                                        class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                        href="#"
                                    >Login</a
                                    >
                                </li>
                                <hr class="h-0 my-2 border border-solid border-t-0 border-gray-700 opacity-25" />
                                <li>
                                    <a
                                        class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                        href="#"
                                    >Sign Up</a
                                    >
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </nav>
        </div >
    );
};

export default Header;