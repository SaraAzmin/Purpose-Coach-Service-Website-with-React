import React from 'react';
import { Link } from 'react-router-dom';
import 'tw-elements';

const Header = () => {
    return (
        <div>
            {/* <div className='px-2 py-5 md:p-7 bg-indigo-200 text-indigo-900 font-serif md:flex md:justify-between'>
                <div className='block'>
                    <Link to='/' class="flex items-center justify-center mb-3 md:mb-0">
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </Link>
                </div>

                <div>
                    <nav>
                        <Link className='text-lg font-medium md:font-semibold hover:text-white' to="home#services">Services</Link>
                        <Link className='mx-2 md:mx-10 text-lg font-medium md:font-semibold hover:text-white' to="/blogs">Blogs</Link>
                        <Link className='text-lg font-medium md:font-semibold hover:text-white' to="/about">About</Link>
                        <Link className=' mx-2 md:mx-10 text-lg font-medium md:font-semibold hover:text-white' to="/register">Register</Link>
                        <Link className='text-lg font-medium md:font-semibold hover:text-white' to="/login">Login</Link>
                    </nav>
                </div>
            </div> */}

            <div>
                <nav className="relative w-full flex flex-wrap items-center justify-between py-5 bg-indigo-200 text-indigo-900 font-serif font-semibold shadow-lg navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                        <button className="navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                                className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor"
                                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                                </path>
                            </svg>
                        </button>
                        <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
                            <Link className="text-xl text-indigo-900" to='/'>Your Purpose Coach</Link>

                            <ul className="navbar-nav flex flex-col pl-3 list-style-none mr-auto">
                                <li className="nav-item px-2">
                                    <Link className="nav-link hover:text-white" aria-current="page" to="home#services">Services</Link>
                                </li>
                                <li className="nav-item pr-2">
                                    <Link className="nav-link hover:text-white p-0" to="/blogs">Blogs</Link>
                                </li>
                                <li className="nav-item pr-2">
                                    <Link className="nav-link hover:text-white p-0" to="/about">About</Link>
                                </li>
                                <li className="nav-item pr-2">
                                    <Link className="nav-link hover:text-white p-0" to="/register">Register</Link>
                                </li>
                                <li className="nav-item pr-2">
                                    <Link className="nav-link hover:text-white p-0" to="/login">Login</Link>
                                </li>
                            </ul>

                        </div>

                    </div>
                </nav>
            </div>
        </div >
    );
};

export default Header;