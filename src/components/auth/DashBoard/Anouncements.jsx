import React from 'react';
import { FaBullhorn, FaCalendarAlt, FaStar } from 'react-icons/fa';

function Announcements() {
  return (
    <div className="announcements p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Latest Announcements</h2>

      <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-lg shadow-lg mb-6 flex items-center">
        <FaBullhorn className="text-blue-500 text-3xl mr-4" />
        <div>
          <h3 className="text-xl font-semibold text-blue-700">Midterm Exams</h3>
          <p className="text-gray-600">Midterm exams start from September 10th. Please check your schedule.</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-100 to-green-50 p-6 rounded-lg shadow-lg mb-6 flex items-center">
        <FaCalendarAlt className="text-green-500 text-3xl mr-4" />
        <div>
          <h3 className="text-xl font-semibold text-green-700">Public Holiday</h3>
          <p className="text-gray-600">School will be closed on September 15th due to a public holiday.</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 p-6 rounded-lg shadow-lg mb-6 flex items-center">
        <FaStar className="text-yellow-500 text-3xl mr-4" />
        <div>
          <h3 className="text-xl font-semibold text-yellow-700">New Extracurricular Activities</h3>
          <p className="text-gray-600">New extracurricular activities will be introduced this semester. Stay tuned for updates!</p>
        </div>
      </div>
    </div>
  );
}

export default Announcements;
