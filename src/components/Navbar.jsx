import React, { useRef } from "react";
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav className="navbar bg-green-950 text-white p-4 fixed w-full z-10 top-0 left-0 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="navbar-logo text-xl font-bold">EduGenius Hub</div>
        <ul className="navbar-links flex space-x-6">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><a href="/#about" className="hover:text-yellow-400">About Us</a></li>
          <li className="hover:text-yellow-400"><a href="/#courses">Courses</a></li>
          {/* <li className="relative group">
            <div className="hover:text-yellow-400">Courses</div>
            <div className="dropdown-content absolute hidden bg-white text-gray-800 shadow-md mt-2 group-hover:block">
              <Link to="/course-details" className="block p-2 hover:bg-gray-200">Course Details</Link>
              <Link to="/select-course" className="block p-2 hover:bg-gray-200">Select Course</Link>
              <Link to="/add-course" className="block p-2 hover:bg-gray-200">Add Course</Link>
            </div>
          </li> */}
          <li className="relative group">
            <a href="#" className="hover:text-yellow-400">Pages</a>
            <div className="dropdown-content absolute hidden bg-white text-gray-800 shadow-md mt-2 group-hover:block">
              {/* <Link to="/events" className="block p-2 hover:bg-gray-200">Event</Link>
              <Link to="/event-details" className="block p-2 hover:bg-gray-200">Event Details</Link> */}
              <a href="/#instructors" className="block p-2 hover:bg-gray-200">Instructors</a>
              {/* <Link to="/instructor-details" className="block p-2 hover:bg-gray-200">Instructor Details</Link> */}
              <Link to="/instructorregistration" className="block p-2 hover:bg-gray-200">Instructor Registration</Link>
              <a href="/#testimonials" className="block p-2 hover:bg-gray-200">Testimonial</a>
              {/* <Link to="/price" className="block p-2 hover:bg-gray-200">Price</Link> */}
              <Link to="/signup" className="block p-2 hover:bg-gray-200">Sign Up</Link>
              <Link to="/login" className="block p-2 hover:bg-gray-200">Sign In</Link>
            </div>
          </li>
          <li><a href="/#contact" className="hover:text-yellow-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
