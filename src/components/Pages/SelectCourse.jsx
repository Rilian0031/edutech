import React from 'react'

const SelectCourse = () => {
    return (
        <div className="select-course p-6">
          <h1 className="text-4xl font-bold mb-8">Select Courses</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Available Courses</label>
              <div className="space-y-4">
                <button type="button" onClick={() => handleSelect('Mathematics')} className="bg-blue-500 text-white p-2 rounded">
                  Mathematics
                </button>
                <button type="button" onClick={() => handleSelect('Science')} className="bg-blue-500 text-white p-2 rounded">
                  Science
                </button>
                {/* Add more course buttons as needed */}
              </div>
            </div>
            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Confirm Selection
            </button>
          </form>
        </div>
      );
    }
export default SelectCourse