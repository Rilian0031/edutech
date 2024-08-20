import React from 'react'
import Sidebar from './Sidebar';
import Extracurriculars from './Extracurriculars';
import Grades from './Grades';
import Assignments from './Assignments';
import Announcements from './Anouncements';
import Schedules from './Schedules';
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <div className="dashboard-layout flex">
      <Sidebar />
      <div className="main-content w-full ml-64">
        {/* <Schedules/>
        <Announcements/>
        <Extracurriculars />
        <Grades />
        <Assignments /> */}
        <Outlet/>
      </div>
    </div>
  );
}

export default DashboardLayout
