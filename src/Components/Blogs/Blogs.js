import React from 'react';


const Blogs = () => {
    return (
        <div>
            <div className='p-5 mx-auto mb-8 mt-8'>
                <h3 className='secondary-title text-center text-4xl font-semibold text-red-600 mb-5'>
                    Our Blogs
                </h3>
                <ol class="border-l-2 border-red-600">
                    <li>
                        <div class="flex flex-start items-center">
                            <div class="bg-red-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                            <h4 class="text-gray-800 font-semibold text-xl -mt-2 secondary-title">Difference between javascript and nodejs.</h4>
                        </div>
                        <div class="ml-6 mb-6 pb-6">

                            <p class="text-gray-700 mt-2 mb-4 description">
                                Javascript is an implementation of ECMAScript, a standard defining the programming language.Browsers have a built-in interpreter for Javascript, along with a bunch of libraries and a run-time environment for working with web pages. <br />
                                Nodejs is an interpreter and environment for javascript which includes a bunch of libraries for using javascript as a general-purpose programming language, with an emphasis on asynchronicity and non-blocking operations.
                            </p>

                        </div>
                    </li>
                    <li>
                        <div class="flex flex-start items-center">
                            <div class="bg-red-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                            <h4 class="text-gray-800 font-semibold text-xl -mt-2 secondary-title">When should you use nodejs and when should you use mongodb?</h4>
                        </div>
                        <div class="ml-6 mb-6 pb-6">

                            <p class="text-gray-700 mt-2 mb-4 description">
                                Node.js uses JavaScript, which is great if we're coming from a front-end developer background - a very common pairing that leads to quick full-stack development potential. <br />
                                Mongodb is used for High Write Load, High Availability in Cloud-It is easier to set up a series of master-slave servers and recovery from failure is faster too, Scalability and Big Data sets And Unstable Schema.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="flex flex-start items-center">
                            <div class="bg-red-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                            <h4 class="text-gray-800 font-semibold text-xl -mt-2 secondary-title">Differences between sql and nosql databases.</h4>
                        </div>
                        <div class="ml-6 mb-6 pb-6">

                            <p class="text-gray-700 mt-2 mb-4 description">
                                SQL databases are a Relational Database( RDBMS) whereas NoSQL databases are distributed databases. This means they are easier to manage and they provide a higher level of flexibility with newer data models.<br />
                                Sql databases are good for complex query whereas Nosql databases are not good for complex queries No sql don't have standard interfaces to perform complex queries.<br />
                                Sql database represent data in the form of table means it represent data in row and coloumns whereas Nosql database represents data in documents means it collects data in key value pairs. <br />
                                SQL databases are vertically scalable whereas NoSQL databases are horizenatlly scalable. <br />
                                SQL databases are scaled increased by increasing the horse power whereas Nosql databases are scaled by increasing the database servers. <br />
                            </p>

                        </div>
                    </li>
                    <li>
                        <div class="flex flex-start items-center">
                            <div class="bg-red-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                            <h4 class="text-gray-800 font-semibold text-xl -mt-2 secondary-title">What is the purpose of jwt and how does it work?</h4>
                        </div>
                        <div class="ml-6 mb-6 pb-6">

                            <p class="text-gray-700 mt-2 mb-4 description">
                                JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. In short, JWTs are used as a secure way to authenticate users and share information. <br />
                                JWT works like this:<br />
                                The user/client app sends a sign in request. <br />
                                Once verified, the API will create a JSON Web Token and sign it using a secret key. <br />
                                Then the API will return that token back to the client application .<br />
                                Finally, the client app will receive the token, verify it on its own side to make sure it's authentic and then proceed to use it on every subsequent request to authenticate the user without having to send their credentials anymore.
                            </p>

                        </div>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Blogs;