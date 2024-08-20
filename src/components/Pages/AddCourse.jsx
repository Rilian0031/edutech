import React, { useState } from 'react';
import { FaBook, FaAlignLeft, FaClipboardList } from 'react-icons/fa';

function AddCourse() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle adding course logic here
    console.log('Course Title:', title);
    console.log('Course Description:', description);
    console.log('Course Content:', content);

    // Reset the form fields after submission
    setTitle('');
    setDescription('');
    setContent('');
  };

  return (
    <div className="add-course p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-blue-800 text-center">Add a New Course</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-bold mb-2 flex items-center">
            <FaBook className="mr-2 text-blue-700" />
            Course Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter course title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-bold mb-2 flex items-center">
            <FaAlignLeft className="mr-2 text-blue-700" />
            Course Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter course description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-bold mb-2 flex items-center">
            <FaClipboardList className="mr-2 text-blue-700" />
            Course Content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter course content"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="6"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Add Course
        </button>
      </form>
    </div>
  );
}

export default AddCourse;
