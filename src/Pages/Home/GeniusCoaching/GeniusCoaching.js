import React from 'react';

const GeniusCoaching = () => {
    return (
        <div className='bg-blue-200'>
            <section class="mx-5 lg:mx-20 px-10 py-10 ">
                <h1 class="font-playfair text-2xl md:text-4xl font-bold mb-5 uppercase">The
                    Let Genius be your partner in well-being</h1>
                <p class="font-raleway mb-10 text-lg">Genius takes you from where you are now to where you want to be.
                </p>
                <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-10 font-raleway">
                    <div class="shadow-lg shadow-blue-400 rounded-md md:mb-20 bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                        <div class="p-5">
                            <p class="my-3 text-gray-600">
                                Genius is always in your own time and at your own pace. Listen to the workshops and meditations anytime, anywhere. Your growth is on your own terms.
                            </p>
                            <a href="" class="font-bold text-blue-800 text-lg">Check Genius Blog</a>
                        </div>
                    </div>

                    <div class="shadow-lg shadow-blue-400 rounded-md bg-white md:mt-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                        <div class="p-5">
                            <p class="my-3 text-gray-600">
                                Genius members get results. Within the first 90 days of Genius, members report feeling 25% less anxious, 40% less lonely, and 50% more focused.
                            </p>
                            <a href="" class="font-bold text-blue-800 text-lg">Check Genius Blog</a>
                        </div>
                    </div>
                    <div class="shadow-lg shadow-blue-400 rounded-md bg-white md:mb-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                        <div class="p-5">
                            <p class="my-3 text-gray-600">
                                The Genius Community will be there for you for life. This is a global network dedicated to well-being, mindfulness, and peace. Our purpose is to serve.
                            </p>
                            <a href="" class="font-bold text-blue-800 text-lg">Check Genius Blog</a>
                        </div>
                    </div>

                    <div class="md:col-span-2 flex justify-center items-center">
                        <img className='h-[24rem]' src="http://jayshettygenius.com/wp-content/uploads/2021/09/app-01.gif" alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GeniusCoaching;