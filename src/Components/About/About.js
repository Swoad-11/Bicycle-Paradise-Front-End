import React from 'react';
import logo from '../../images/logo.png'


const About = () => {
    return (
        <div>
            <div className='p-5 mx-auto mb-8 mt-8'>
                <h3 className='secondary-title text-center text-4xl font-semibold text-red-600'>
                    About Us
                </h3>
                <div className='grid grid-cols-1 gap-5'>
                    <div>
                        <img className='mx-auto' src={logo} alt="" />
                    </div>
                    <div className='description text-center'>
                        <p>
                            When you walk into Bicycle Paradise, it's obvious you're among passionate cyclists. Since the store opened in 2000, it has been known for its quality bikes as well as its team of friendly and knowledgeable pros. Our owner, has been fully immersed in all things cycling his entire life. He was competing in BMX races by the age of five, and started working in the store alongside his late father, at the age of 16. This lifestyle instilled a love for bikes he still feels in his 40s, and he believes everyone should experience the happiness that only riding a bicycle can bring.
                        </p>
                    </div>
                    <hr className='h-0 my-6 border border-solid border-t-0 border-red-400 w-3/5 mx-auto' />
                    <div>
                        <h3 className='secondary-title text-center text-3xl font-semibold text-red-600'>
                            Our Team-members
                        </h3>
                        <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid gap-5 p-3 mt-3'>
                            <div className="flex justify-center">
                                <div className="rounded-lg shadow-lg bg-white max-w-sm border-solid border-b-4 border-red-500">
                                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                        <img className="rounded-t-lg" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/senior-cyclist-portrait-high-res-stock-photography-935488968-1532534224.jpg" alt="" />
                                    </a>
                                    <div className="p-6">
                                        <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">Drew Jordan</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="rounded-lg shadow-lg bg-white max-w-sm border-solid border-b-4 border-red-500">
                                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                        <img className="rounded-t-lg" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-a-senior-black-male-cyclist-royalty-free-image-1599061195.jpg" alt="" />
                                    </a>
                                    <div className="p-6">
                                        <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">Jack Crockett</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="rounded-lg shadow-lg bg-white max-w-sm border-solid border-b-4 border-red-500">
                                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                        <img className="rounded-t-lg" src="https://cdn.mos.cms.futurecdn.net/BXU7vdWhHn48GZTPaEg9nh-1200-80.jpg" alt="" />
                                    </a>
                                    <div className="p-6">
                                        <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">Robin Blake</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;