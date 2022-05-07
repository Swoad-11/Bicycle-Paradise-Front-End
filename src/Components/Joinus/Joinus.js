import React from 'react';

const Joinus = () => {
    return (
        <div>
            <hr className='h-0 my-8 border border-solid border-t-0 border-red-400 w-3/5 mx-auto' />
            <div class="relative overflow-hidden bg-no-repeat bg-cover mt-12" style=
                {{
                    backgroundImage: `url('https://d2p6e6u75xmxt8.cloudfront.net/18/2021/06/desktop-getintocycling-1-full-hero-1536x480.jpg')`,
                    height: 350
                }}
            >
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    style={{ backgroundColor: `rgba(0, 0, 0, 0.75)` }}>
                    <div class="flex justify-center items-center h-full">
                        <div class="text-center px-6 md:px-12">
                            <h3 class="secondary-title text-3xl text-red-500 font-bold mb-1">Where All Riders Belong</h3>
                            <p class="description text-2xl text-white mb-4">Things are better as a member. Get first and exclusive access to the newest styles & innovations, birthday rewards, points for purchases and more.</p>
                            <button type="button"
                                class="inline-block px-6 py-2.5 border-2 border-white text-white hover:border-red-500 hover:text-red-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                data-mdb-ripple="true" data-mdb-ripple-color="light">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Joinus;