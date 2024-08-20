import React, { useState } from 'react';

function Signin() {
  // State variables for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log('Sign-in form submitted');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1527261842777-fbd3c1a9137a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGJhY2tncm91bmR8ZW58MHx8fHwxNjkzMjE4NjMz&ixlib=rb-1.2.1&q=80&w=1080')" }}>
      <div className="bg-white shadow-xl rounded-lg max-w-md w-full p-8 backdrop-blur-md bg-opacity-80">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Welcome Back!</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <a href="#" className="text-sm text-green-400 hover:underline">Forgot Password?</a>
          </div>
          <button
            type="submit"
            className="bg-green-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-gray-600 text-sm mt-4">
          Don't have an account? <a href="#" className="text-green-400 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Signin
