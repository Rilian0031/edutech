import React from 'react';

const InstructorRegistration = () => {

    return (
        <div className="instructor-registration p-8 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Instructor Registration</h1>
            <form>
                <div className="mb-5">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
                    <input
                        type="text"
                        value="name"
                        onChange={(e) => setName(e.target.value)}
                        className="shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 focus:ring-2 focus:ring-green-400 focus:outline-none"
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                    <input
                        type="email"
                        value="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 focus:ring-2 focus:ring-green-400 focus:outline-none"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Subject</label>
                    <input
                        type="text"
                        value="subject"
                        onChange={(e) => setSubject(e.target.value)}
                        className="shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 focus:ring-2 focus:ring-green-400 focus:outline-none"
                        placeholder="Enter your subject"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Upload Resume</label>
                    <input
                        type="file"
                        onChange={(e) => setResume(e.target.files[0])}
                        className="shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 focus:ring-2 focus:ring-green-400 focus:outline-none"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-md shadow-md transition duration-300 ease-in-out">
                    Register
                </button>
            </form>
        </div>
    );
}

export default InstructorRegistration;
