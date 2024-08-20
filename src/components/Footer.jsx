import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-700 to-gray-900 text-gray-200 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">About EduGenius Hub</h2>
          <p className="text-gray-300 leading-relaxed">
            EduGenius Hub is committed to delivering top-notch education through our innovative online platform. Our mission is to empower learners worldwide with the essential skills and knowledge to excel in their chosen fields.
          </p>
        </div>

        {/* Contact Info Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <p className="text-gray-300 mb-2">Email: support@edugeniushub.com</p>
          <p className="text-gray-300 mb-6">Phone: +123 456 7890</p>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300"><i className="fab fa-facebook text-2xl"></i></a>
            <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300"><i className="fab fa-twitter text-2xl"></i></a>
            <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300"><i className="fab fa-instagram text-2xl"></i></a>
            <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300"><i className="fab fa-linkedin text-2xl"></i></a>
          </div>
        </div>

        {/* Newsletter Subscription Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Newsletter</h2>
          <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates and course offerings.</p>
          <form>
            <input
              type="email"
              className="w-full p-2 mb-4 rounded-md bg-gray-800 text-gray-300 placeholder-gray-400 focus:outline-none"
              placeholder="Enter your email"
            />
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition-colors duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-12 border-t border-gray-700 pt-6">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} EduGenius Hub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
