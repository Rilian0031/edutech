import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: 'Introduction to Mathematics',
    description: 'Learn the basics of mathematics, including algebra, geometry, and calculus.',
    image: '/src/assets/images/course1.jpg'
  },
  {
    id: 2,
    title: 'English Literature',
    description: 'Explore the works of famous authors and dive into literary analysis.',
    image: '/src/assets/images/course2.jpg'
  },
  // Add more courses as needed
];

function Courses() {
  return (
    <div className="courses p-6">
      <h1 className="text-4xl font-bold mb-8 text">Our Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <div key={course.id} className="course-card bg-white rounded-lg shadow-md p-4">
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
            <p className="text-gray-700 mb-4">{course.description}</p>
            <Link to={`/courses/${course.id}`} className="text-blue-500 hover:underline">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
