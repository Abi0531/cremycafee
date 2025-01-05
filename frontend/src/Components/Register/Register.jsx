import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImgR from '../../assets/login.png';



const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); // Hook for navigation after successful registration

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    if (!username || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      // Make API call to backend
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message);
        setError(""); // Clear any previous errors
        setTimeout(() => {
          navigate("/login"); // Redirect to login page after success
        }, 2000);
      } else {
        setError(data.error || "Registration failed.");
      }
    } catch (error) {
      setError("An error occurred while registering.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r  flex items-center justify-center">
      {/* Flex container for image and form */}
      <div className="flex max-w-5xl w-full rounded-lg overflow-hidden shadow-lg bg-white">
        
        {/* Left side (image) */}
        <div className="w-1/2 flex items-center justify-center">
          <img
            src={ImgR} 
            alt="Register Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side (form) */}
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Sign Up</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username input */}
            <div>
              <label htmlFor="username" className="block text-gray-600 font-medium">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

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
              Sign Up
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              {/* Link to Login page */}
              <span
                onClick={() => navigate('/login')}
                className="text-blue-600 cursor-pointer"
              >
                Log In
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
