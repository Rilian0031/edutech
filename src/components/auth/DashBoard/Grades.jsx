import React from 'react';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

function Grades() {
  return (
    <div className="grades p-6  bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-blue-800">Grades Overview</h2>
      <ul className="bg-white p-6 rounded-lg shadow-lg space-y-6">
        <li className="p-4 bg-blue-50 rounded-lg flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-blue-700">Mathematics</h3>
            <p className="text-gray-600">Grade: A <FaCheckCircle className="inline text-green-500 ml-2" /></p>
            <p className="text-sm text-gray-500">Last Updated: Aug 10, 2024</p>
          </div>
          <div>
            <p className="text-lg font-bold text-blue-700">Credit: 4</p>
            <p className="text-sm text-gray-500">Teacher: Mr. Doe</p>
          </div>
        </li>
        <li className="p-4 bg-yellow-50 rounded-lg flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-yellow-700">Physics</h3>
            <p className="text-gray-600">Grade: B+ <FaExclamationTriangle className="inline text-yellow-500 ml-2" /></p>
            <p className="text-sm text-gray-500">Last Updated: Aug 8, 2024</p>
          </div>
          <div>
            <p className="text-lg font-bold text-yellow-700">Credit: 4</p>
            <p className="text-sm text-gray-500">Teacher: Ms. Smith</p>
          </div>
        </li>
        <li className="p-4 bg-green-50 rounded-lg flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-green-700">History</h3>
            <p className="text-gray-600">Grade: A- <FaCheckCircle className="inline text-green-500 ml-2" /></p>
            <p className="text-sm text-gray-500">Last Updated: Aug 5, 2024</p>
          </div>
          <div>
            <p className="text-lg font-bold text-green-700">Credit: 3</p>
            <p className="text-sm text-gray-500">Teacher: Mrs. Lee</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Grades;
