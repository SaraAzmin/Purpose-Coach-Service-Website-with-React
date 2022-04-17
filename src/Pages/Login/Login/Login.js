import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const navigateToRegister = () => {
        navigate('/register');
    }

    if (loading) {
        return (<Loading></Loading>);
    }

    if (user) {
        navigate(from, { replace: true })
    }

    const handleLogin = event => {

        const email = event.target.email.value;
        const password = event.target.password.value;

        event.preventDefault();

        signInWithEmailAndPassword(email, password);
    }

    return (
        <div>
            <section className="h-screen">
                <div className="container px-6 h-full w-3/4 mx-auto">
                    <h2 className='text-lg md:text-2xl pt-5 md:py-8 font-semibold uppercase font-serif text-blue-800'>Login Here</h2>
                    <div className="flex justify-center items-center flex-wrap g-6 text-gray-800">
                        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="w-full" alt="Phone image" />
                        </div>
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                            <form onSubmit={handleLogin}>
                                {/* <!-- Email input --> */}
                                <div className="mb-6">
                                    <input
                                        type="email" name='email'
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Email address" required
                                    />
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="mb-6">
                                    <input
                                        type="password" name='password'
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Password" required
                                    />
                                </div>

                                {/* <!-- Submit button --> */}
                                <input
                                    type="submit" value='Login'
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >
                                </input>
                            </form>
                            <div className="flex justify-between items-center mb-6">
                                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                    Don't have an account?
                                    <Link onClick={navigateToRegister}
                                        to="/register"
                                        className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out pl-1"
                                    >Register</Link>
                                </p>
                                <Link
                                    to="#!"
                                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                                >Forgot password?</Link>
                            </div>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;