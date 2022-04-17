import React from 'react';
import slider1 from '../../../images/slider/slider1.png';
import slider2 from '../../../images/slider/slider2.jpg';
import slider3 from '../../../images/slider/slider 3.jpg';

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full">
                        <img
                            src={slider1}
                            className="block w-full"
                            alt="..."
                        />
                        <div className="carousel-caption md:block absolute text-center">
                            <h5 className="text-xl md:text-3xl lg:text-5xl uppercase font-semibold">Stop Focusing on other people</h5>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={slider2}
                            className="block w-full"
                            alt="..."
                        />
                        <div className="carousel-caption md:block absolute text-center">
                            <h5 className="text-xl md:text-3xl lg:text-5xl uppercase font-semibold">Go the extra mile, it's never crowded</h5>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={slider3}
                            className="block w-full"
                            alt="..."
                        />
                        <div className="carousel-caption  md:block absolute text-center">
                            <h5 className="text-xl md:text-3xl lg:text-5xl uppercase font-semibold">Be someone who makes you happy</h5>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;