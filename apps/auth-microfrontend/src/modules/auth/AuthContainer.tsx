"use client"
import { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

const AuthContainer = () => {
    const [loginPage, setLoginPage] = useState(true);
    const togglePage = () => setLoginPage(!loginPage);
    return (
        <div className='flex flex-col space-y-8 items-center justify-start'>
            <div className='w-full h-12 bg-gray-200 border rounded-full flex items-center justify-center overflow-hidden'>
                <button onClick={togglePage} className={`w-full h-full text-xl font-black rounded-full ${loginPage ? '' : 'bg-gray-900 text-yellow-300'}`}>Sign Up</button>
                <button onClick={togglePage} className={`w-full h-full text-xl font-black rounded-full ${loginPage ? 'bg-gray-900 text-yellow-300' : ''}`}>Login</button>
            </div>
            {loginPage ? <Login /> : <SignUp />}
        </div>
    )
}

export default AuthContainer