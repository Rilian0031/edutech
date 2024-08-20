import React from 'react'

const Register = () => {
    return (
        <div className="p-4">
          <h1 className="text-3xl font-bold">Register</h1>
          <form onSubmit={handleRegister} className="mt-4 space-y-4">
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              value={form.name} 
              onChange={handleChange} 
              className="w-full p-2 border rounded"
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={form.email} 
              onChange={handleChange} 
              className="w-full p-2 border rounded"
            />
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              value={form.password} 
              onChange={handleChange} 
              className="w-full p-2 border rounded"
            />
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Register</button>
          </form>
          <p className="mt-4">Already have an account? <a href="/login" className="text-blue-500">Login</a></p>
        </div>
      );
    }
export default Register