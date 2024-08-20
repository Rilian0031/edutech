import React from 'react'

const CourseList = () => {
    return (
        <div className="ml-64 p-8">
          <h1 className="text-3xl font-bold mb-4">Available Courses</h1>
          <ul className="list-disc pl-5 space-y-2">
            <li><Link to="/course-details" className="text-teal-500 hover:underline">Mathematics</Link></li>
            <li><Link to="/course-details" className="text-teal-500 hover:underline">English</Link></li>
            <li><Link to="/course-details" className="text-teal-500 hover:underline">Science</Link></li>
            <li><Link to="/course-details" className="text-teal-500 hover:underline">History</Link></li>
            <li><Link to="/course-details" className="text-teal-500 hover:underline">Social Studies</Link></li>
            {/* Add more courses as needed */}
          </ul>
        </div>
      );
    }
export default CourseList