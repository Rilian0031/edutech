import React from 'react';

function CourseDetails() {
  const course = {
    title: "Exploring the Wonders of Physics",
    overview: "Dive into the fascinating world of physics in this comprehensive course. We cover classical mechanics, electromagnetism, quantum physics, and modern theories. Through interactive experiments and real-world applications, you'll develop a deep understanding of how the universe operates.",
    instructor: {
      name: "Dr. Michael Thompson",
      experience: 12
    },
    schedule: "Mondays and Wednesdays, 10 AM - 12 PM",
    prerequisites: "Basic understanding of high school mathematics and science.",
    materials: [
      "Concepts of Physics by H.C. Verma",
      "Fundamentals of Physics by David Halliday, Robert Resnick, and Jearl Walker",
      "Introduction to Quantum Mechanics by David J. Griffiths"
    ],
    testimonials: [
      { text: "This course made complex physics concepts easy to understand. The hands-on experiments were particularly enjoyable.", author: "Linda Parker" },
      { text: "Dr. Thompson's enthusiasm and knowledge are unmatched. I feel much more confident in my understanding of physics now.", author: "James Wilson" }
    ]
  };

  return (
    <div className="course-details p-6 max-w-4xl mx-auto bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-xl">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-8 text-center">{course.title}</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-4xl font-bold text-gray-700 mb-6">Course Overview</h2>
        <p className="text-gray-600 mb-8">{course.overview}</p>
        
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Instructor</h3>
        <div className="mb-8 flex items-center">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0 mr-4"></div>
          <div>
            <p className="text-gray-700 font-semibold text-xl">{course.instructor.name}</p>
            <p className="text-gray-500 text-lg">{course.instructor.experience} years of experience</p>
          </div>
        </div>
        
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Schedule</h3>
        <p className="text-gray-600 mb-8">{course.schedule}</p>
        
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Prerequisites</h3>
        <p className="text-gray-600 mb-8">{course.prerequisites}</p>
        
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Course Materials</h3>
        <ul className="list-disc list-inside text-gray-600 mb-8">
          {course.materials.map((material, index) => (
            <li key={index} className="mb-2">{material}</li>
          ))}
        </ul>

        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Student Testimonials</h3>
        <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
          {course.testimonials.map((testimonial, index) => (
            <div key={index} className="mb-6">
              <p className="text-gray-700 font-medium text-lg">"{testimonial.text}"</p>
              <p className="text-gray-500 text-sm">- {testimonial.author}</p>
            </div>
          ))}
        </div>
        
        <h3 className="text-3xl font-semibold text-gray-800 mt-8 mb-4">Contact for More Information</h3>
        <form className="bg-gray-100 p-8 rounded-lg shadow-md border border-gray-200">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2 text-lg font-medium">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" 
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2 text-lg font-medium">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" 
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2 text-lg font-medium">Message</label>
            <textarea 
              id="message" 
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" 
              rows="4" 
              placeholder="Your Message"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-green-600 text-white p-4 rounded-md hover:bg-green-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default CourseDetails;
