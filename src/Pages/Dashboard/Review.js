import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import DashboardNavbar from './DashboardNavbar';

const Review = () => {

    const [user] = useAuthState(auth);
    const name = user?.displayName;
    const image = user?.photoURL;
    const handleReview = event => {
        event.preventDefault()
        const designation = event.target.designation.value;
        const message = event.target.message.value;
        const ratings = event.target.ratings.value;
        const review = {
            name, work: designation, description: message, image, ratings
        }

        fetch('http://localhost:5000/review', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success review dd:', data);
                if (data.insertedId) {
                    toast.success(`${name}, Thanks for your feedback`)
                    event.target.reset()
                }
            })
    }
    return (
        <div>
            <DashboardNavbar
                header={'My Review'}
            ></DashboardNavbar>
            <form onSubmit={handleReview} className='min-h-screen mr-5 mt-5 bg-slate-200'>
                <input type="text" name='name' value={name} class="input w-96 font-bold ml-4 mt-8" />
                <input type="text" name='designation' placeholder="Company's name, Designation" class="input w-96 ml-4 mt-3" />
                <input type="text" name='ratings' placeholder="Your ratings" class="input w-96 ml-4 mt-3" />
                <textarea name='message' class="textarea w-96 ml-4 mt-3 h-24" placeholder="Bio"></textarea><br />
                <input class=" ml-4 mt-3 py-2 px-10 btn-secondary" type='submit' value='Submit' />
            </form>
        </div>
    );
};

export default Review;