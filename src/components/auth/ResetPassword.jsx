import React, { useState } from 'react';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      alert('Password reset successfully!');
      setPassword('');
      setConfirmPassword('');
      setErrorMessage('');
    } else {
      setErrorMessage('Passwords do not match!');
    }
  };

  return (
    <div 
      className="flex justify-center items-center min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: 'url(/login-bg.jpg)' }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-4">Reset Password</h1>
        <p className="text-gray-600 text-center mb-6">
          Please enter your new password below and confirm it to reset.
        </p>
        <form onSubmit={handleResetPassword} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">New Password</label>
            <input 
              type="password" 
              placeholder="Enter new password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Confirm Password</label>
            <input 
              type="password" 
              placeholder="Confirm your password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
          <button 
            type="submit" 
            className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
