import React, { useState, useEffect } from "react";
import { getAllStudents } from "./Service";
import FilterStudents from "./FilterStudents";

const StudentsCards = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchStudents() {
      try {
        const response = await getAllStudents();
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    }
    fetchStudents();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-row gap-4 my-4 mx-2 p-4">
      <div className="w-[22%] border-r-2 border-gray-500 pr-4">
        <h2 className="text-3xl font-bold text-cyan-400 text-shadow-gray-100 text-shadow-2xs mb-4 px-4 py-2">Filters</h2>
        <FilterStudents/>
      </div>
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.isArray(students) && students.length > 0 ? (
          students.map((student, index) => {
            return (
              <div key={index} className="flex flex-col bg-gradient-to-bl from-cyan-300 via-yellow-200 to-teal-500 rounded-xl p-5 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-transform duration-150">
                <div className="mb-4">
                  <span className="font-extrabold text-stone-700 [text-shadow:2px_2px_2px_rgba(0,0,0,0.3)] text-xl">
                    {student.name}
                  </span>
                </div>
                <div className="mb-2 font-bold text-sm text-blue-600">
                  <span className="font-bold text-md text-fuchsia-500">School:</span> {student.school}
                </div>
                <div className="mb-2 font-bold text-sm text-indigo-600">
                  <span className="font-bold text-md text-green-500">Class:</span> {student.stClass}
                </div>
                <div className="mb-2 font-bold text-md text-teal-500">
                  <span className="font-bold text-md text-red-500">Fees Amount:</span>{" "}
                  ₹{student.feesamount}
                </div>
                <div className="mb-2 font-bold text-lg text-orange-500">
                  <span className="font-bold text-lg text-pink-600">Status:</span> {student.status}
                </div>
                <div className="text-sm font-bold text-pink-500">
                  <span className="font-bold text-md text-red-600">Note:</span> {student.note}
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-2xl flex justify-center items-center text-gray-600 col-span-full">No students found</div>
        )}
      </div>
    </div>
  );
};

export default StudentsCards;
