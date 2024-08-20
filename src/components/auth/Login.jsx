import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../apis';
import LoginImage from '../../assets/images/LoginImage.jpg'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      const loginResult = await login(email, password);
      const token = loginResult.data.token;
      localStorage.setItem('token', token);
      navigate('/dashboard');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Image Section */}
        <div className="w-1/2">
          <img
            src={LoginImage}
            alt="Login Image"
            className="object-cover h-full w-full"
          />
        </div>
        
        {/* Form Section */}
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-green-600">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label className="text-gray-700 text-lg mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 text-lg mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
