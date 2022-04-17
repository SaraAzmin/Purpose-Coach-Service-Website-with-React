import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import google from '../../../images/social/google.png';
import github from '../../../images/social/github.png';

const SocialLogin = () => {

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    let errorElement;


    if (googleUser || githubUser) {

        navigate('/home');
    }

    if (googleLoading || githubLoading) {
        return (<Loading></Loading>);
    }

    if (googleError || githubError) {
        errorElement = <p className='text-red-700 mb-2'>Error: {googleError?.message} {githubError?.message} </p>
    }

    return (
        <div>
            <div
                className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
            </div>

            {errorElement}

            <div>
                <button onClick={() => signInWithGoogle()} className="px-7 py-3 text-white bg-blue-800 font-medium text-sm uppercase rounded shadow-md w-full flex justify-center items-center mb-3">
                    {/* <!-- google --> */}
                    <img className="w-4 h-4 mr-2" src={google} alt="" />
                    <span>Continue with Google</span></button>

                <button onClick={() => signInWithGithub()} className="px-7 py-3 text-white bg-blue-800 font-medium text-sm uppercase rounded shadow-md w-full flex justify-center items-center mb-3">
                    {/* <!-- github --> */}
                    <img className="w-4 h-4 mr-2" src={github} alt="" />
                    <span>Continue with Github</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;