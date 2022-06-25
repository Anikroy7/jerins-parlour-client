import { Link } from "react-router-dom";
import React from 'react';
import { useForm } from 'react-hook-form';
import SocialLogin from "./SocialLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";



const Signup = () => {
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
                <div className=" w-96 bg-base-100 border rounded border-slate-400">
                    <div className="card-body">
                        <h2 className="font-bold text-xl mb-8">Create an account</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">

                                <p className="flex items-center">
                                    <div>
                                        <span><FontAwesomeIcon icon={faUser} /></span>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            style={{ fontFamily: 'fontawesome' }}
                                            placeholder="First name"
                                            className="ml-1 text-secondary border-b-2 py-2 px-1 w-full max-w-xs"
                                            {...register("firstName", {
                                                required: {
                                                    value: true,
                                                    message: 'Name is required'
                                                }

                                            })}
                                        /></div>
                                </p>
                                <label className="label">
                                    {errors.firstName?.type === 'required' && <span className="label-text-alt text-red-700">{errors.firstName.message}</span>}


                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <p className="flex items-center">
                                    <div>
                                        <span><FontAwesomeIcon icon={faUser} /></span>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Last name"
                                            className="ml-1 text-black border-b-2 px-1  py-2 text w-full max-w-xs"
                                            {...register("lastName", {
                                                required: {
                                                    value: true,
                                                    message: 'Last name is required'
                                                }

                                            })}
                                        />
                                    </div>
                                </p>

                                <label className="label">
                                    {errors.lastname?.type === 'required' && <span className="label-text-alt text-red-700">{errors.lastName.message}</span>}


                                </label>
                            </div>
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
                                        /></div>
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
                            <div className="form-control w-full max-w-xs">
                                <p className="flex items-center">
                                    <div>
                                        <span><FontAwesomeIcon icon={faLock} /></span>
                                    </div>
                                    <div>
                                        <input
                                            type="password"
                                            placeholder="Confirm-password"
                                            className="ml-1 text-black px-1  border-b-2 py-2 text w-full max-w-xs"
                                            {...register("cofirmPassword", {
                                                required: {
                                                    value: true,
                                                    message: 'Confirm password is required'
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
                                    {errors.confirmPassword?.type === 'required' && <span className="label-text-alt text-red-700">{errors.confirmPassword?.message}</span>}
                                    {errors.confirmPassword?.type === 'minLength' && <span className="label-text-alt text-red-400">{errors.confirmPassword?.message}</span>}

                                </label>

                            </div>

                            <input className='p-2 rounded mt-4 btn-secondary text-white w-full max-w-xs' type="submit" value='Create an account' />
                        </form>
                        <p className="font-semibold mt-7 mb-7">Already have an Account? <span><Link className='underline decoration-1 text-secondary mr-5 font bold' to='/login'>Log in</Link></span></p>


                    </div>

                </div>
            </div>
            <SocialLogin></SocialLogin>
        </section>
    );
};

export default Signup;