import React from 'react';
import google from '../../Icon/Group 573.png';
import facebook from '../../Icon/Vector.png';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {

    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fbuser, fbloading, fberror] = useSignInWithFacebook(auth);
    let errorMessage;
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if (guser || fbuser) {
        navigate(from, { replace: true });
    }
    if (gerror || fberror) {
        errorMessage = <p>{gerror?.message} {fberror?.message}</p>
    }
    if (gloading || fbloading) {
        return <Loading></Loading>
    }
    const handelGooglLogin = () => {
        signInWithGoogle()
    }

    const handelFacebookLogin = () => {
        signInWithFacebook()
    }
    return (
        <div>
            <div class="flex flex-col w-72 mx-auto border-opacity-50 h-56 mb-9">
                <div class="divider">OR</div>
                <p className='text-red-500 text-center'>{errorMessage}</p>
                <span onClick={handelFacebookLogin} className='border-slate-500 flex bg-blue-800 text-white items-center border boder hover:transition hover:duration-700 cursor-pointer hover:ease-in-out hover:bg-slate-900 rounded-full mt-5 mb-3 w-72 py-1 px-5'>
                    <img className='w-8 mr-2 text-green-500' src={facebook} alt="" />
                    <span>Cotinue With Facebook</span>

                </span>
                <span onClick={handelGooglLogin} className='border-slate-500 items-center border boder rounded-full flex text-black w-72 py-1 px-5 hover:bg-secondary hover:text-white hover:transition hover:duration-700 cursor-pointer hover:ease-in-out'>
                    <img className='w-8 mr-2' src={google} alt="" />
                    <span>Cotinue With google</span>
                </span>
            </div>
        </div>
    );
};

export default SocialLogin;