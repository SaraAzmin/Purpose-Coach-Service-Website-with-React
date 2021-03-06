import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import 'tw-elements';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogout = () => {
        signOut(auth);
    }

    return (

        <div>
            <nav className="relative w-full flex flex-wrap items-center justify-between py-3 text-white bg-blue-800 font-serif font-semibold shadow-lg navbar navbar-expand-lg navbar-light">
                <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                    <button className="navbar-toggler text-white border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                            className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor"
                                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                            </path>
                        </svg>
                    </button>
                    <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
                        <Link className="text-2xl text-white" to='/'>Your Purpose Coach</Link>

                        <ul className="navbar-nav flex flex-col pl-5 list-style-none mr-auto font-medium text-lg">
                            <li className="nav-item mx-2 py-5 hover:bg-blue-100 hover:text-blue-800">
                                <Link className="nav-link" aria-current="page" to="home#services">Services</Link>
                            </li>
                            <li className="nav-item mr-2 py-5 hover:bg-blue-100 hover:text-blue-800">
                                <Link className="nav-link p-0" to="/blogs">Blogs</Link>
                            </li>
                            <li className="nav-item mr-2 py-5 hover:bg-blue-100 hover:text-blue-800">
                                <Link className="nav-link p-0" to="/about">About</Link>
                            </li>
                            <li className="nav-item mr-2 py-5 hover:bg-blue-100 hover:text-blue-800">
                                <Link className="nav-link p-0" to="/register">Register</Link>
                            </li>
                            <li className={`nav-item mr-2 py-5 ${user ? 'bg-blue-100 text-blue-800' : 'hover:bg-blue-100 hover:text-blue-800'}`}>
                                {
                                    user ?
                                        <Link onClick={handleLogout} className="nav-link p-0" to="/home">Log Out</Link> :
                                        <Link className="nav-link p-0" to="/login">Login</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    );
};

export default Header;