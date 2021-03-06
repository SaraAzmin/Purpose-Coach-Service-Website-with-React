import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';


const Register = () => {

    const navigate = useNavigate();
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    let errorElement;

    const navigateToLogin = () => {
        navigate('/login');
    }


    if (user) {
        navigate('/home');
    }

    if (loading) {
        return (<Loading></Loading>);
    }

    if (error) {
        errorElement = <p className='text-red-700 mb-2'>Error: {error?.message}</p>
    }


    const handleRegistration = async (event) => {

        event.preventDefault();

        const email = event.target.email.value;
        const name = event.target.name.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');

    }

    return (
        <div>
            <section className="h-screen">
                <div className="container px-6 h-full w-3/4 mx-auto">
                    <h2 className='text-lg md:text-2xl pt-5 md:py-8 font-semibold uppercase font-serif text-blue-800'>Please Register Here</h2>
                    <div className="flex justify-center items-center flex-wrap g-6 text-gray-800">
                        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="w-full" alt="Phone image" />
                        </div>
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                            <form onSubmit={handleRegistration}>
                                <div className="form-group mb-6">
                                    <input type="text" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="" name='name'
                                        placeholder="Your Name" required />
                                </div>

                                <div className="form-group mb-6">
                                    <input type="email" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="" name='email'
                                        placeholder="Email address" required />
                                </div>

                                <div className="form-group mb-6">
                                    <input type="password" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="" name='password'
                                        placeholder="Password" required />
                                </div>

                                <input
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg w-full"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light" value='Register'
                                >
                                </input>
                            </form>
                            <p className="text-sm font-semibold my-3">
                                Already have an account?
                                <Link onClick={navigateToLogin}
                                    to="/login"
                                    className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out pl-1"
                                >Login</Link>
                            </p>
                            {errorElement}
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Register;