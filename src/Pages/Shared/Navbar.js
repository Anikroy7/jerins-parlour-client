import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from "react-router-dom";
import auth from '../../firebase.init';
import logo from '../../Image/Group 33092.png'
import Loading from './Loading';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>
    }




    const menuItems = <>

        <li><NavLink to={'/home'} className={({ isActive }) => (isActive ? 'btn btn-secondary bg-secondary text-yellow-50' : undefined)}>Home</NavLink></li>
        <li><NavLink to={'/portfolio'} className={({ isActive }) => (isActive ? 'btn btn-secondary text-yellow-50 bg-secondary' : undefined)}>Our Porfolio</NavLink></li>
        <li><NavLink to={'/ourteam'} className={({ isActive }) => (isActive ? 'btn btn-secondary text-yellow-50 bg-secondary' : undefined)}>Our Team</NavLink></li>
        <li><NavLink to={'/contactus'} className={({ isActive }) => (isActive ? 'btn btn-secondary text-yellow-50 bg-secondary' : undefined)}>Contact us</NavLink></li>


    </>
    return (
        <div class="navbar px-10 bg-red-50 pt-10 pb-10 flex">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl"><img style={{ height: '50px' }} src={logo} alt="" /></a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

            <div className='navbar-end px-5'>


                {
                    user ? <div>
                        <div class="dropdown dropdown-end mr-3">
                            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                <div class="w-10 rounded-full">
                                    <img src={user?.photoURL} alt='im' />
                                </div>
                            </label>

                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a class="justify-between">
                                        Profile
                                        <span class="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li onClick={() => signOut(auth)}><a>Logout</a></li>
                            </ul>
                        </div>

                    </div> : <a className='font-semibold mr-5'><NavLink to={'/login'} className={({ isActive }) => (isActive ? 'btn btn-secondary text-yellow-50 bg-secondary' : undefined)}>Login</NavLink></a>}



                {
                    user && <a className='font-semibold text-slate-600 mr-3'>{user?.displayName}</a>
                }


                <a className='font-semibold text-slate-600'><NavLink to={'/signup'} className={({ isActive }) => (isActive ? 'btn btn-secondary text-yellow-50 bg-secondary' : undefined)}>Sign up</NavLink></a>

            </div>
        </div>
    );
};

export default Navbar;