import React, { useState } from 'react';
import fire from '../../fire.js';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(email, password).catch((error) => {
            console.error('Incorrect username or password');
        });
    }
    return (
        <div>
        <title>Personal Budget App | Login Page</title>
        <h1>Login</h1>
            <form onSubmit={handleSubmit}>
            <label for="email">Email:</label>
                    <input
                    id ="email"
                    type="text"
                    onChange={({ target }) => setEmail(target.value)}
                    placeholder="Email"
                    aria-required="true"
                />
                <br />
                <label for="pass">Password:</label>
                <input
                   id ="pass"
                    type="password"
                    onChange={({ target}) => setPassword(target.value)}
                    placeholder="Password"
                    aria-required="true"
                />
                <br />
                <button type="submit">
                    Sign in
                </button>
            </form>
        </div>
        
    )
};

export default Login