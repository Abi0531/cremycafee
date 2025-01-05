
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Img1 from '../../assets/login.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
        setError('Please fill in both fields.');
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            setError('');
            console.log('Login successful:', data);

            // Store user information (e.g., in localStorage or state management)
            localStorage.setItem('user', JSON.stringify(data.user));

            // Redirect based on the response
            navigate(data.redirect); // Redirect to either /admin or /staff
        } else {
            setError(data.error || 'Login failed.');
        }
    } catch (error) {
        console.error('Error during login:', error);
        setError('Something went wrong. Please try again.');
    }
};


  return (
    <div className="min-h-screen bg-gradient-to-r flex items-center justify-center">
      {/* Flex container */}
      <div className="flex max-w-5xl w-full rounded-lg overflow-hidden shadow-lg bg-white">
        
        {/* Left side (image) */}
        <div className="w-1/2 flex items-center justify-center">
          <img 
            src={Img1}
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side (form) */}
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email input */}
            <div>
              <label htmlFor="email" className="block text-gray-600 font-medium">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Password input */}
            <div>
              <label htmlFor="password" className="block text-gray-600 font-medium">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Error message */}
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            {/* Submit button */}
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              {/* <span className="text-blue-600 cursor-pointer">Sign Up</span> */}
              <span
                onClick={() => navigate('/register')} 
                className="text-blue-600 cursor-pointer"
              >
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
