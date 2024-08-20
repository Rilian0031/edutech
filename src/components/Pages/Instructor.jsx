import React from 'react'
import { Link } from 'react-router-dom';

function Instructor() {
  return (
    <div className="instructor p-6">
      <h1 className="text-4xl font-bold mb-8">Our Instructors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="instructor-card bg-white p-6 rounded-lg shadow-md">
          <img src="/src/assets/images/instructor1.jpg" alt="Instructor" className="rounded-lg mb-4"/>
          <h3 className="text-xl font-bold mb-2">Mr. Johnson</h3>
          <p>Mathematics Instructor</p>
          <Link to="/instructor/johnson" className="text-indigo-600 hover:text-indigo-800">View Profile</Link>
        </div>
        {/* Add more instructor cards as needed */}
      </div>
    </div>
  );
}


export default Instructor