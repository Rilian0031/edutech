import React from 'react'



function Testimonial() {
    const testimonials = [
      {
        name: 'Jane Doe',
        message: 'This platform has transformed my learning experience. The courses are well-structured and the instructors are very supportive.',
        image: '/src/assets/images/student1.jpg'
      },
      {
        name: 'John Smith',
        message: 'I have learned so much here! The interactive courses make learning fun and effective.',
        image: '/src/assets/images/student2.jpg'
      },
      {
        name: 'John Smith',
        message: 'I have learned so much here! The interactive courses make learning fun and effective.',
        image: '/src/assets/images/student3.jpg'
      },
      {
        name: 'John Smith',
        message: 'I have learned so much here! The interactive courses make learning fun and effective.',
        image: '/src/assets/images/student4.jpg'
      },
      // Add more testimonials as needed
    ];
  
    return (
      <div className="testimonial p-6">
        <h1 className="text-4xl font-bold mb-8">Student Testimonials</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card bg-white p-6 rounded-lg shadow-md">
              <img src={testimonial.image} alt={testimonial.name} className="rounded-full w-24 h-24 mb-4"/>
              <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
              <p>{testimonial.message}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Testimonial