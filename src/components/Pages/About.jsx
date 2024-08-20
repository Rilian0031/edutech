import React from 'react'

const About = () => {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-200 to-green-500">
      <div className="max-w-4xl p-12 bg-white shadow-xl rounded-lg">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-gray-800">About EduGenius Platform</h1>
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
      );
    }

export default About