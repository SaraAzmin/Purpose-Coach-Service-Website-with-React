import React from 'react';

const GeniusCoaching = () => {
    return (
        <div className='bg-blue-200'>
            <section className="mx-5 lg:mx-20 px-10 py-10 ">
                <h1 className="text-xl md:text-4xl font-bold mb-3 md:mb-5 uppercase">The
                    Let Genius be your partner in well-being</h1>
                <p className="mb-5 md:mb-10 text-sm md:text-lg">Genius takes you from where you are now to where you want to be.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-10">
                    <div className="shadow-lg shadow-blue-400 rounded-md md:mb-20 bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                        <div className="p-5">
                            <p className="my-3 pb-5 text-gray-600">
                                Genius is always in your own time and at your own pace. Listen to the workshops and meditations anytime, anywhere. Your growth is on your own terms.
                            </p>
                            <a href="" className="font-bold text-blue-800 text-lg border-2 p-2 border-blue-800 rounded-lg">Check Genius Blog</a>
                        </div>
                    </div>

                    <div className="shadow-lg shadow-blue-400 rounded-md bg-white md:mt-24 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                        <div className="p-5">
                            <p className="my-3 text-gray-600 pb-5">
                                Genius members get results. Within the first 90 days of Genius, members report feeling 25% less anxious, 40% less lonely, and 50% more focused.
                            </p>
                            <a href="" className="font-bold text-blue-800 text-lg border-2 p-2 border-blue-800 rounded-lg">Check Genius Blog</a>
                        </div>
                    </div>
                    <div className="shadow-lg shadow-blue-400 rounded-md bg-white md:mb-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                        <div className="p-5">
                            <p className="my-3 text-gray-600 pb-5">
                                The Genius Community will be there for you for life. This is a global network dedicated to well-being, mindfulness, and peace. Our purpose is to serve.
                            </p>
                            <a href="" className="font-bold text-blue-800 text-lg border-2 p-2 border-blue-800 rounded-lg">Check Genius Blog</a>
                        </div>
                    </div>

                    <div className="md:col-span-2 flex justify-center items-center">
                        <img className='h-[24rem]' src="http://jayshettygenius.com/wp-content/uploads/2021/09/app-01.gif" alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GeniusCoaching;