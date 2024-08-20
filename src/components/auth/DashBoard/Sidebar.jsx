import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar bg-green-400 text-white h-full w-64 fixed top-0">
      <h2 className="text-2xl font-bold p-4">School Dashboard</h2>
      <ul className="mt-4">
        <li className="p-2 hover:bg-green-500 rounded transition-colors">
          <Link to="/overview" className="block text-white hover:text-yellow-400">
            Overview
          </Link>
        </li>
        <li className="p-2 hover:bg-green-500 rounded transition-colors">
          <Link to="/dashboard/assignments" className="block text-white hover:text-yellow-400">
            Assignments
          </Link>
        </li>
        <li className="p-2 hover:bg-green-500 rounded transition-colors">
          <Link to="/dashboard/grades" className="block text-white hover:text-yellow-400">
            Grades
          </Link>
        </li>
        <li className="p-2 hover:bg-green-500 rounded transition-colors">
          <Link to="/dashboard/schedule" className="block text-white hover:text-yellow-400">
            Schedule
          </Link>
        </li>
        <li className="p-2 hover:bg-green-500 rounded transition-colors">
          <Link to="/dashboard/announcements" className="block text-white hover:text-yellow-400">
            Announcements
          </Link>
        </li>
        <li className="p-2 hover:bg-green-500 rounded transition-colors">
          <Link to="/dashboard/extracurriculars" className="block text-white hover:text-yellow-400">
            Extracurriculars
          </Link>
        </li>
        <li className="p-2 hover:bg-green-500 rounded transition-colors">
          <Link to="/settings" className="block text-white hover:text-yellow-400">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
