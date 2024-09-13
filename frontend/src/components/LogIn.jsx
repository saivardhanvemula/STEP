import React, { useState } from 'react';
import './LogIn.css';

const LogIn = () => {
    const [isLogin, setIsLogin] = useState(true); 

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className='LogIn'>
            <div className='form-container'>
                <h2>{isLogin ? 'Log In' : 'Sign Up'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' id='email' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password:</label>
                        <input type='password' id='password' required />
                    </div>
                    {!isLogin && (
                        <div className='form-group'>
                            <label htmlFor='confirm-password'>Confirm Password:</label>
                            <input type='password' id='confirm-password' required />
                        </div>
                    )}
                    <button type='submit'>{isLogin ? 'Log In' : 'Sign Up'}</button>
                </form>
                <a onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Need an account?' : 'Already have an account?'}
                </a>
            </div>
        </div>
    );
};

export default LogIn;
