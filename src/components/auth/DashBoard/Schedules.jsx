import React from 'react'

const Schedules = () => {
    return (
        <div className="schedule p-6 ml-64">
          <h2 className="text-2xl font-bold mb-4">Class Schedule</h2>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Day</th>
                  <th className="px-4 py-2">Time</th>
                  <th className="px-4 py-2">Subject</th>
                  <th className="px-4 py-2">Instructor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Monday</td>
                  <td className="border px-4 py-2">08:00 - 09:30</td>
                  <td className="border px-4 py-2">Mathematics</td>
                  <td className="border px-4 py-2">Mr. Johnson</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Monday</td>
                  <td className="border px-4 py-2">10:00 - 11:30</td>
                  <td className="border px-4 py-2">History</td>
                  <td className="border px-4 py-2">Ms. Lee</td>
                </tr>
                {/* Add more rows for the full schedule */}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

export default Schedules