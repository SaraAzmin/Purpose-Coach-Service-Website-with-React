import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const emailRef = useRef('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    const navigateToRegister = () => {
        navigate('/register');
    }

    if (loading) {
        return (<Loading></Loading>);
    }

    if (user) {
        navigate(from, { replace: true })
    }

    if (error) {
        errorElement = <p className='text-red-700 mb-2'>Error: {error?.message}</p>
    }

    const handleLogin = event => {

        const email = event.target.email.value;
        const password = event.target.password.value;

        event.preventDefault();

        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {

        const email = emailRef.current.value;

        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }

    }

    return (
        <div>
            <section className="">
                <div className="container px-3 h-full w-3/4 mx-auto mb-10">
                    <h2 className='text-lg md:text-2xl pt-5 md:py-5 font-semibold uppercase font-serif text-blue-800 text-center'>Login Here</h2>
                    <div className="flex justify-center items-center flex-wrap text-gray-800">
                        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="w-full"
                                alt="Phone image" />
                        </div>
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                            <form onSubmit={handleLogin}>
                                {/* <!-- Email input --> */}
                                <div className="mb-6">
                                    <input ref={emailRef}
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
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 w-full"
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
                                <Link onClick={resetPassword}
                                    to="/login"
                                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                                >Forgot password?</Link>
                            </div>
                            {errorElement}
                            <SocialLogin></SocialLogin>
                            <ToastContainer></ToastContainer>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;