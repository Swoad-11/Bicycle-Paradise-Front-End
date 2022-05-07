import React from 'react';

const review = () => {
    return (
        <div>
            <hr className='h-0 my-8 border border-solid border-t-0 border-red-400 w-3/5 mx-auto' />
            <div>
                <div>
                    <h1 class="secondary-title text-4xl font-bold mb-8 text-center text-red-600">Customer Reviews</h1>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 p-5'>
                    <div class="flex justify-center">
                        <div class="block rounded-lg shadow-lg bg-red-100 hover:bg-red-200 max-w-sm ">
                            <div class="py-3 px-6 border-b border-red-300">
                                <h5 class="secondary-title text-gray-900 text-xl mb-2 font-semibold text-center">Got My Dream Bike</h5>
                            </div>
                            <div class="p-6">

                                <p class="description text-gray-700 text-base mb-4">
                                    They had the bike i wanted in stock and at a great price. Walked out the door with it same day - ez peezy!
                                </p>
                            </div>
                            <div class="py-3 px-6 text-gray-600">
                                - Shannon S.
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="block rounded-lg shadow-lg bg-red-100 hover:bg-red-200 max-w-sm">
                            <div class="py-3 px-6 border-b border-red-300">
                                <h5 class="secondary-title text-gray-900 text-xl mb-2 font-semibold text-center">Trace X 2</h5>
                            </div>
                            <div class="p-6">

                                <p class="description text-gray-700 text-base mb-4">
                                    The Trance X 2 is a solid all around mountain bike for the money. I'm very happy with it.<br />
                                </p>
                            </div>
                            <div class="py-3 px-6 text-gray-600">
                                - Mike D.
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="block rounded-lg shadow-lg bg-red-100 hover:bg-red-200 max-w-sm">
                            <div class="py-3 px-6 border-b border-red-300">
                                <h5 class="secondary-title text-gray-900 text-xl mb-2 font-semibold  text-center">Good Products Good Customer Service</h5>
                            </div>
                            <div class="p-6">

                                <p class="description text-gray-700 text-base mb-4 ">
                                    During all my visits, they have made me feel important and have always helpful.
                                </p>
                            </div>
                            <div class="py-3 px-6 text-gray-600">
                                - Ismael O.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default review;