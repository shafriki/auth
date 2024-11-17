import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import auth from '../firebase/firebase.config';

const Google = () => {

    const googleProvider = new GoogleAuthProvider();


    const handleGooglebtn = () => {
            signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log('error', error)
            })
    }
    return (
        <div>
            <h1 className='text-center text-4xl font-bold my-10'>Google Sign In</h1>
            <div className='flex items-center flex-col'>
            <button onClick={handleGooglebtn} className='btn bg-lime-300 text-xl'>GoogleSignIN</button>
            </div>
        </div>
    );
};

export default Google;