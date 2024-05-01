import React, { useState, useEffect } from "react";
import axios from "axios";

const LabEntryOverview = () => {
  const [labEntries, setLabEntries] = useState([]);
  const [searchLabNumber, setSearchLabNumber] = useState("MA115");

  useEffect(() => {
    const fetchLabEntries = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/lab-entries/getAll"
        );
        setLabEntries(response.data.labEntries);
      } catch (error) {
        console.error("Error fetching lab entries:", error);
      }
    };

    fetchLabEntries();
  }, []);

  const filteredData = labEntries.filter((item) =>
    item.labCode.toLowerCase().includes(searchLabNumber.toLowerCase())
  );

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="overflow-x-auto">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Student Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Semester
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Purpose
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Entry Time
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Leave Time
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Lab Number
                  <input
                    type="text"
                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search by Lab No."
                    value={searchLabNumber}
                    onChange={(e) => setSearchLabNumber(e.target.value)}
                  />
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((labEntry, index) => {
                return (
                  <tr key={labEntry._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {labEntry.studentToken.student_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">Sem 6</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {labEntry.purpose}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {" "}
                      {labEntry.entryTime}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {labEntry.leaveTime}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {labEntry.labCode}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LabEntryOverview;
