import { faLock, faMessage, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';
import logo from '../../Image/Group 33092.png'

const Dashboard = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/*  <!-- Page content here --> */}
                <Outlet></Outlet>
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <Link to='/'>
                        <img className='w-36' src={logo} alt="" />
                    </Link>
                    {/* <!-- Sidebar content here --> */}
                    <li className='mt-8'><a><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon><Link to={`/dashboard/${id}`}>Book</Link></a></li>
                    <li className='m-0'><a><FontAwesomeIcon icon={faLock}></FontAwesomeIcon><Link to={`/dashboard/${id}/bookList`}>Booking List</Link></a></li>
                    <li className='m-0'><a><FontAwesomeIcon icon={faMessage}></FontAwesomeIcon><Link to={`/dashboard/${id}/review`}>My Review</Link></a></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;