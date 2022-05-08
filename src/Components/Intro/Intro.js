import React from 'react';



const Intro = () => {
    return (
        <div className='mb-5 p-5 mx-auto'>
            <h1 className="secondary-title text-4xl font-bold mt-8 mb-5 text-center text-red-600">Bicycle Paradise</h1>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 mt-8 items-center gap-5'>
                <div>
                    <section className="overflow-hidden text-gray-700">
                        <div className="container px-5 mx-auto lg:px-32">
                            <div className="flex flex-wrap -m-1 md:-m-2">
                                <div className="flex flex-wrap w-1/2">
                                    <div className="w-1/2 p-1 md:p-2">
                                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                            src="https://contents.mediadecathlon.com/p2208596/k$fe045a519a1031c51052d10d4b29ed6e/275quote-mountain-bike-st-100-grey.jpg?&f=800x800" />
                                    </div>
                                    <div className="w-1/2 p-1 md:p-2">
                                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                            src="https://cdn.shopify.com/s/files/1/0286/1214/collections/col-hero-mountain-bike-helmets_750x.jpg?v=1593645218" />
                                    </div>
                                    <div className="w-full p-1 md:p-2">
                                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                            src="https://images.unsplash.com/photo-1572111504021-40abd3479ddb?ixlib=rb-1.2.1ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" />
                                    </div>
                                </div>
                                <div className="flex flex-wrap w-1/2">
                                    <div className="w-full p-1 md:p-2">
                                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                            src="https://cdn-ctstaging.pressidium.com/wp-content/uploads/2022/03/Factor-Lando-XC-and-Lando-HT-cross-country-mountain-bike-launch-20-1340x754.jpg" />
                                    </div>
                                    <div className="w-1/2 p-1 md:p-2">
                                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                            src="https://cdn.shopify.com/s/files/1/0286/1214/collections/col-hero-full-finger-gloves_750x.jpg?v=1634159918" />
                                    </div>
                                    <div className="w-1/2 p-1 md:p-2">
                                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                                            src="https://cdn.shopify.com/s/files/1/0286/1214/collections/bike-tools_750x.jpg?v=1595292048" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <h3 className='secondary-title text-center text-3xl font-semibold text-red-600 mb-2'>
                        What we provide?
                    </h3>
                    <p className='description text-center'>
                        We have the widest selection of bikes and gear for beginners and cycling enthusiasts. Check out cheap bikes and get worldwide delivery. Easy Export & Import. Reliable Merchants. Low Cost Logistics.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Intro;