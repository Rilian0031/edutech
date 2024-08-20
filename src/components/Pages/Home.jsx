import React, { useRef } from "react";
import { Link } from 'react-router-dom';
import course1 from '../../assets/images/course1.jpg';
import course2 from '../../assets/images/course2.jpg';
import course3 from '../../assets/images/course3.jpg';
import school from '../../assets/images/school.jpg';
import instructor1 from '../../assets/images/instructor1.jpg'; 
import instructor2 from '../../assets/images/instructor2.jpg';
import instructor3 from '../../assets/images/instructor3.jpg';

// import instructor4 from '../../assets/images/instructor4.jpg';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Contact from "./Contact";
import Testimonial from "./Testimonial";

function Home() {

  
  return (
    <>
      <Navbar/>
      <div className="mt-12 p-8 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header
        className="min-h-screen bg-cover bg-no-repeat mb-32 rounded-lg"
        style={{ backgroundImage: `url(${school})` }}
      >
        <div className="text-center py-64 bg-opacity-30 bg-gray-800">
          <h1 className="text-5xl font-extrabold text-gray-200 mb-4 max-w-3xl mx-auto">
            Welcome to EduGenius Hub
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Your one-stop solution for online learning. Explore our diverse range of courses and start your educational journey today.
          </p>
        </div>
      </header>

      {/* About Section */}
      <section id="about">
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">About EduGenius Platform</h1>
          <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-200 to-green-500">
      <div className="max-w-4xl p-12 bg-white shadow-xl rounded-lg">
     
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          EduGenius is a cutting-edge educational platform that leverages the power of artificial intelligence to transform the way students learn. Our mission is to provide personalized, engaging, and effective learning experiences for students of all levels. Whether you're a beginner or an advanced learner, EduGenius has something to offer.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Our platform offers a wide range of courses, from fundamental subjects like Mathematics and Science to more specialized areas like Artificial Intelligence and Data Science. Each course is carefully crafted by experts in the field, ensuring that the content is not only accurate but also engaging and interactive.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          What sets EduGenius apart is our focus on personalized learning. We use AI algorithms to assess each student's strengths and weaknesses, allowing us to tailor the course content to meet their individual needs. This personalized approach ensures that every student can learn at their own pace and achieve their full potential.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Join EduGenius today and take the first step towards a brighter future. With our state-of-the-art platform, experienced instructors, and supportive community, you're in the right place to achieve your educational goals.
        </p>
      </div>
    </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h1 id="courses" className="text-2xl text-center font-semibold text-gray-700 my-12 max-w-3xl mx-auto uppercase">
          Courses
        </h1>
        <div className="course-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="course-card bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src={course1} alt="Mathematics" className="rounded-lg mb-4 h-40 w-full object-cover" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Mathematics</h2>
            <p className="text-gray-700 mb-4">Master the fundamentals of mathematics with our expert-led courses designed to help you excel in algebra, calculus, and geometry.</p>
            <p className="text-gray-600 mb-4">Instructor: Dr. Alice Smith</p>
            <p className="text-gray-600 mb-4">Duration: 12 weeks</p>
            <Link to="/course-details" className="text-green-600 font-medium hover:underline">Learn More</Link>
          </div>

          <div className="course-card bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src={course2} alt="Science" className="rounded-lg mb-4 h-40 w-full object-cover" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Science</h2>
            <p className="text-gray-700 mb-4">Explore the world of science through interactive lessons and hands-on projects that cover physics, chemistry, and biology.</p>
            <p className="text-gray-600 mb-4">Instructor: Dr. Michael Thompson</p>
            <p className="text-gray-600 mb-4">Duration: 14 weeks</p>
            <Link to="/course-details" className="text-green-600 font-medium hover:underline">Learn More</Link>
          </div>

          <div className="course-card bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src={course3} alt="English" className="rounded-lg mb-4 h-40 w-full object-cover" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">English</h2>
            <p className="text-gray-700 mb-4">Improve your English language skills with comprehensive courses covering grammar, writing, and conversation practice.</p>
            <p className="text-gray-600 mb-4">Instructor: Ms. Emily Johnson</p>
            <p className="text-gray-600 mb-4">Duration: 10 weeks</p>
            <Link to="/course-details" className="text-green-600 font-medium hover:underline">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-8">
        <h1 id="instructors" className="text-2xl text-center font-semibold text-gray-700 mb-8">Meet Our Instructors</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="instructor-card bg-white p-6 rounded-lg shadow-lg">
            <img src={instructor1} alt="Instructor 1" className="rounded-full mb-4 h-40 w-40 object-cover mx-auto" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">John Doe</h2>
            <p className="text-gray-600 text-center">Mathematics Expert with 10 years of experience.</p>
          </div>

          <div className="instructor-card bg-white p-6 rounded-lg shadow-lg">
            <img src={instructor2} alt="Instructor 2" className="rounded-full mb-4 h-40 w-40 object-cover mx-auto" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Jane Smith</h2>
            <p className="text-gray-600 text-center">English Literature Specialist with a passion for creative writing.</p>
          </div>

          <div className="instructor-card bg-white p-6 rounded-lg shadow-lg">
            <img src={instructor3} alt="Instructor 3" className="rounded-full mb-4 h-40 w-40 object-cover mx-auto" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Michael Brown</h2>
            <p className="text-gray-600 text-center">Science Teacher focusing on Physics and hands-on experiments.</p>
          </div>

          <div className="instructor-card bg-white p-6 rounded-lg shadow-lg">
            <img src={instructor2} alt="Instructor 4" className="rounded-full mb-4 h-40 w-40 object-cover mx-auto" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Emily Davis</h2>
            <p className="text-gray-600 text-center">Music Instructor with a background in classical and contemporary music.</p>
          </div>
        </div>
      </section>
      <section id="testimonials">
        <Testimonial/>
      </section>
    </div>
    <div id="contact">
      <Contact/>
    </div>
    <Footer/>
    </>
  );
}

export default Home;
