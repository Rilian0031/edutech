import React from 'react';
import { FaFlask, FaGavel, FaPalette, FaMusic, FaRunning, FaCamera } from 'react-icons/fa';

const Extracurriculars = () => {
    return (
        <div className="extracurriculars p-6">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Extracurricular Activities</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Science Club */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                        <FaFlask className="text-3xl mr-3" />
                        <h3 className="text-2xl font-semibold">Science Club</h3>
                    </div>
                    <p className="text-white text-opacity-80">Explore the wonders of science through experiments and projects. Weekly meetings every Wednesday.</p>
                    <div className="mt-4">
                        <span className="bg-yellow-500 text-sm font-medium px-3 py-1 rounded-full">Open to All</span>
                    </div>
                </div>

                {/* Debate Team */}
                <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                        <FaGavel className="text-3xl mr-3" />
                        <h3 className="text-2xl font-semibold">Debate Team</h3>
                    </div>
                    <p className="text-white text-opacity-80">Enhance your public speaking and critical thinking skills. Practice sessions on Fridays.</p>
                    <div className="mt-4">
                        <span className="bg-red-500 text-sm font-medium px-3 py-1 rounded-full">Advanced Level</span>
                    </div>
                </div>

                {/* Art Club */}
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                        <FaPalette className="text-3xl mr-3" />
                        <h3 className="text-2xl font-semibold">Art Club</h3>
                    </div>
                    <p className="text-white text-opacity-80">Express your creativity through various art forms. Art exhibitions held quarterly.</p>
                    <div className="mt-4">
                        <span className="bg-blue-500 text-sm font-medium px-3 py-1 rounded-full">Creative Minds</span>
                    </div>
                </div>

                {/* Music Band */}
                <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                        <FaMusic className="text-3xl mr-3" />
                        <h3 className="text-2xl font-semibold">Music Band</h3>
                    </div>
                    <p className="text-white text-opacity-80">Join the school band and showcase your musical talent. Performances every semester.</p>
                    <div className="mt-4">
                        <span className="bg-pink-500 text-sm font-medium px-3 py-1 rounded-full">Musicians Only</span>
                    </div>
                </div>

                {/* Sports Club */}
                <div className="bg-gradient-to-r from-red-500 to-red-700 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                        <FaRunning className="text-3xl mr-3" />
                        <h3 className="text-2xl font-semibold">Sports Club</h3>
                    </div>
                    <p className="text-white text-opacity-80">Stay active and join various sports activities. Competitions held every month.</p>
                    <div className="mt-4">
                        <span className="bg-green-500 text-sm font-medium px-3 py-1 rounded-full">Athletes Welcome</span>
                    </div>
                </div>

                {/* Photography Club */}
                <div className="bg-gradient-to-r from-teal-500 to-teal-700 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                        <FaCamera className="text-3xl mr-3" />
                        <h3 className="text-2xl font-semibold">Photography Club</h3>
                    </div>
                    <p className="text-white text-opacity-80">Capture the beauty of the world through your lens. Workshops every Saturday.</p>
                    <div className="mt-4">
                        <span className="bg-orange-500 text-sm font-medium px-3 py-1 rounded-full">Open to All</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Extracurriculars;
