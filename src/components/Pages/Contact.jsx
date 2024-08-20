import React from 'react';

function Contact() {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-black">Contact Us</h1>
        <p className="text-lg text-black mb-4">Email: <a href="mailto:info@ourschool.com" className="text-blue-600 hover:underline">info@ourschool.com</a></p>
        <p className="text-lg text-black mb-4">Phone: <a href="tel:+233546965569" className="text-blue-600 hover:underline">+233 546 965 569</a></p>
        <h2 className="text-2xl font-semibold mb-4 text-black">Location</h2>
        <p className="text-lg text-black mb-4">123 Learning Lane, Education City, Knowledge State</p>
        <h2 className="text-2xl font-semibold mb-4 text-black">Business Hours</h2>
        <p className="text-lg text-black mb-4">Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p className="text-lg text-black">Saturday: 10:00 AM - 2:00 PM</p>
        <p className="text-lg text-black">Sunday: Closed</p>
      </div>
    </div>
  );
}

export default Contact;
