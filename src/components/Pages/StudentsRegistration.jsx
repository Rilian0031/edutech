import React from 'react'

const StudentsRegistration = () => {
    return (
        <div className="student-registration p-6">
          <h1 className="text-4xl font-bold mb-8">Student Registration</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Select Course</label>
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                required
              >
                <option value="" disabled>Select a Course</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Science">Science</option>
                {/* Add more course options as needed */}
              </select>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Register
            </button>
          </form>
        </div>
      );
    }
export default StudentsRegistration