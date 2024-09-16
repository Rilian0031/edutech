import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Assignments from "./Assignments"; 
import Grades from "./Grades"; 
import { getCourse } from "../../../apis";

function Dashboard() {
  const [activeSection, setActiveSection] = useState("overview");
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    async function fetchCoursesOnDashboard() {
      const coursesResult = await getCourse(); // await added
      setCourses(coursesResult.data.data);
    }
    fetchCoursesOnDashboard();
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case "assignments":
        return <Assignments />;
      case "grades":
        return <Grades />;
      default:
        return (
          <>
          
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-bold">Courses Enrolled</h2>
                <p className="text-4xl mt-4 font-extrabold">{courses.length}</p>
              </div>
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-bold">Assignments Due</h2>
                <p className="text-4xl mt-4 font-extrabold">3</p>
              </div>
              <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-bold">Total Credits</h2>
                <p className="text-4xl mt-4 font-extrabold">16</p>
              </div>
            </div>

            {/* Recent Grades */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-2xl font-bold mb-4">Recent Grades</h2>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Mathematics - A</span>
                  <span className="text-gray-500 text-sm">Last Week</span>
                </li>
                <li className="flex justify-between">
                  <span>Physics - B+</span>
                  <span className="text-gray-500 text-sm">2 Weeks Ago</span>
                </li>
                <li className="flex justify-between">
                  <span>History - A-</span>
                  <span className="text-gray-500 text-sm">3 Weeks Ago</span>
                </li>
              </ul>
            </div>

            {/* Upcoming Assignments */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-2xl font-bold mb-4">Upcoming Assignments</h2>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Math Homework 4</span>
                  <span className="text-gray-500 text-sm">Due in 2 days</span>
                </li>
                <li className="flex justify-between">
                  <span>Physics Lab Report</span>
                  <span className="text-gray-500 text-sm">Due in 4 days</span>
                </li>
                <li className="flex justify-between">
                  <span>History Essay</span>
                  <span className="text-gray-500 text-sm">Due in 5 days</span>
                </li>
              </ul>
            </div>

            {/* Announcements */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-2xl font-bold mb-4">Announcements</h2>
              <p>
                Midterm exams will start from September 10th. Please check your
                schedule for exam timings.{" "}
                <Link
                  to="/dashboard/schedule"
                  className="text-blue-500 hover:underline"
                >
                  View Schedule
                </Link>
              </p>
            </div>

            {/* Calendar */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-2xl font-bold mb-4">School Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 border rounded-lg bg-blue-50">
                  <h3 className="font-bold">Science Fair</h3>
                  <p className="text-sm text-gray-600">Sep 12, 2024</p>
                </div>
                <div className="p-4 border rounded-lg bg-green-50">
                  <h3 className="font-bold">Math Olympiad</h3>
                  <p className="text-sm text-gray-600">Sep 20, 2024</p>
                </div>
                <div className="p-4 border rounded-lg bg-yellow-50">
                  <h3 className="font-bold">Drama Club Performance</h3>
                  <p className="text-sm text-gray-600">Sep 25, 2024</p>
                </div>
                <div className="p-4 border rounded-lg bg-red-50">
                  <h3 className="font-bold">Sports Day</h3>
                  <p className="text-sm text-gray-600">Oct 5, 2024</p>
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="dashboard p-6 ml-64">
      <h1 className="text-4xl font-bold mb-6">Welcome Back, Jane!</h1>

      <nav className="mb-6">
        <ul className="flex space-x-4">
          <li className="p-2">
            <button
              onClick={() => setActiveSection("overview")}
              className="hover:text-yellow-400"
            >
              Overview
            </button>
          </li>
          <li className="p-2">
            <button
              onClick={() => setActiveSection("assignments")}
              className="hover:text-yellow-400"
            >
              Assignments
            </button>
          </li>
          <li className="p-2">
            <button
              onClick={() => setActiveSection("grades")}
              className="hover:text-yellow-400"
            >
              Grades
            </button>
          </li>
        </ul>
      </nav>

      <div className="content">{renderContent()}</div>
    </div>
  );
}

export default Dashboard;
