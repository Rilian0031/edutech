import React from 'react'

const InstructorDetails = () => {
    return (
        <div className="instructor-details p-6">
          <h1 className="text-4xl font-bold mb-8">Mrs. Johnson</h1>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/src/assets/images/instructor1.jpg" alt="Instructor" className="rounded-lg mb-4"/>
            <h2 className="text-2xl font-bold mb-4">About the Instructor</h2>
            <p>Mr. Johnson has over 10 years of experience teaching mathematics. She is known for his interactive teaching style and dedication to student success.</p>
            
            {/* Add more details as needed */}
          </div>
          <h1 className="text-4xl font-bold mb-8">Mr. Benedict</h1>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/src/assets/images/instructor2.jpg" alt="Instructor" className="rounded-lg mb-4"/>
            <h2 className="text-2xl font-bold mb-4">About the Instructor</h2>
            <p>Mr. Benedict has over 10 years of experience teaching mathematics. He is known for his interactive teaching style and dedication to student success.</p>

            <h1 className="text-4xl font-bold mb-8">Mrs. Joanah</h1>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/src/assets/images/instructor3.jpg" alt="Instructor" className="rounded-lg mb-4"/>
            <h2 className="text-2xl font-bold mb-4">About the Instructor</h2>
            <p>Mrs. Joanah has over 10 years of experience teaching mathematics. She is known for his interactive teaching style and dedication to student success.</p>
            
            {/* Add more details as needed */}
          </div>
            
          </div>
        </div>
      );
    }

export default InstructorDetails