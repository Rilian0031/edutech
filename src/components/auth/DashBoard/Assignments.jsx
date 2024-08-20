import React from 'react';
import { FaBook, FaClock, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

function Assignments() {
  return (
    <div className="assignments p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Your Assignments</h2>
      
      <ul className="space-y-6">
        <li className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaBook className="text-blue-500 text-2xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-blue-700">Math Homework 4</h3>
                <p className="text-gray-600">Solve problems from Chapter 5.</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-500"><FaClock className="inline mr-1" /> Due: Aug 18, 2024</p>
              <p className="text-red-500"><FaExclamationCircle className="inline mr-1" /> Status: Not Submitted</p>
            </div>
          </div>
        </li>

        <li className="bg-gradient-to-r from-green-100 to-green-50 p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaBook className="text-green-500 text-2xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-green-700">Physics Lab Report</h3>
                <p className="text-gray-600">Write a report on the recent experiment.</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-500"><FaClock className="inline mr-1" /> Due: Aug 20, 2024</p>
              <p className="text-yellow-500"><FaClock className="inline mr-1" /> Status: In Progress</p>
            </div>
          </div>
        </li>

        <li className="bg-gradient-to-r from-yellow-100 to-yellow-50 p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaBook className="text-yellow-500 text-2xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-yellow-700">History Essay</h3>
                <p className="text-gray-600">Discuss the causes of World War II.</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-500"><FaClock className="inline mr-1" /> Due: Aug 21, 2024</p>
              <p className="text-gray-500"><FaCheckCircle className="inline mr-1" /> Status: Not Started</p>
            </div>
          </div>
        </li>

        <li className="bg-gradient-to-r from-red-100 to-red-50 p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaBook className="text-red-500 text-2xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-red-700">Chemistry Project</h3>
                <p className="text-gray-600">Prepare a model of a chemical compound.</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-500"><FaClock className="inline mr-1" /> Due: Aug 25, 2024</p>
              <p className="text-green-500"><FaCheckCircle className="inline mr-1" /> Status: Completed</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Assignments;
