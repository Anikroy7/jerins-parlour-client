import { Link } from "react-router-dom";
import React from 'react';
import { useForm } from 'react-hook-form';
import SocialLogin from "./SocialLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async data => {

        const name = data.name;
        const email = data.email;
        const password = data.password;
        // await createUserWithEmailAndPassword(email, password);
        // await updateProfile({ displayName: name })
        console.log(data);
    };

    return (
        <section className="">
            <div className='flex justify-center items-center h-full pt-10 pb-10'>
                <div className=" w-96 bg-base-100 border rounded shadow-2xl border-red-100">
                    <div className="card-body">
                        <h2 className="font-bold text-2xl mb-8 text-secondary text-center">Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <p className="flex items-center">
                                    <div>
                                        <span><FontAwesomeIcon icon={faEnvelope} /></span>
                                    </div>
                                    <div>

                                        <input
                                            type="email"
                                            placeholder="Username or Email"
                                            className="ml-1 text-black  px-1 border-b-2 py-2  text w-full max-w-xs"
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: 'Email is required'
                                                },
                                                pattern: {
                                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                    message: 'Please give valid email adress'
                                                }
                                            })}
                                        />
                                    </div>
                                </p>

                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-400">{errors.email.message}</span>}

                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <p className="flex items-center">
                                    <div>
                                        <span><FontAwesomeIcon icon={faLock} /></span>
                                    </div>
                                    <div>
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            className="ml-1 text-black px-1  border-b-2 py-2 text w-full max-w-xs"
                                            {...register("password", {
                                                required: {
                                                    value: true,
                                                    message: 'password is required'
                                                },
                                                minLength: {
                                                    value: 6,
                                                    message: 'Must be six characters or long'
                                                }
                                            })}
                                        />
                                    </div>
                                </p>

                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-700">{errors.password?.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-400">{errors.password?.message}</span>}

                                </label>

                            </div>


                            <input className='p-2 rounded mt-4 btn-secondary text-white w-full max-w-xs' type="submit" value='Login' />
                        </form>
                        <p className="font-semibold mt-7 mb-7">Don't have an account?  <span><Link className='underline decoration-1 text-secondary mr-5 font bold' to='/Signup'>Create an account</Link></span></p>


                    </div>

                </div>
            </div>
            <SocialLogin></SocialLogin>
        </section>
    );
};

export default Login;