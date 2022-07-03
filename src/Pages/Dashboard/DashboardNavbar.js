import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const DashboardNavbar = ({ header, name }) => {
    const [user] = useAuthState(auth)
    return (
        <div class="navbar">
            <div class="flex-1">
                <h2 class="normal-case text-xl font-bold ml-20">{header}</h2>
            </div>
            <div class="flex-none">
                <h3 className='font-bold mr-14'>{user?.displayName}</h3>
            </div>
        </div>
    );
};

export default DashboardNavbar;