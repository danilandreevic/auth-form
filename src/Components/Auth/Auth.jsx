import React, { useState } from 'react';
import './Auth.css';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://66d9439d4ad2f6b8ed53f47b.mockapi.io/login/login');
            const data = await response.json();

            const user = data.find(user => user.email === email && user.password === password);

            if (user) {
                alert('Login successful!');
            } else {
                setErrorMessage('Invalid email or password.');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setErrorMessage('Error connecting to the server.');
        }
    };

    return (
        <>
            <div className="auth-header">
                <h1>Auth</h1>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <p>Email</p>
                        <input
                            required
                            className="auth-input"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <p>Password</p>
                        <input
                            required
                            className="auth-input"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="auth-button" type="submit">Login</button>
                    {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
                </form>
            </div>
        </>
    );
};

export default Auth;
