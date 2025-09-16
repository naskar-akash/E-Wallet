import React, { useEffect, useState } from "react";
import { getAllStudents } from "./Service";
import FilterStudents from "./FilterStudents";
import { useStudentContext } from "./StudentContext";
import { FiFilter } from "react-icons/fi";
import AlertMsg from "./AlertMsg";
import Update from "./Update";
import Delete from "./Delete";

const StudentsCards = () => {
  const { serverMsg, status, showAlert } = AlertMsg(2);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
  const { students, setStudents, nameFilter, statusFilter,filterIcon,setFilterIcon } =
    useStudentContext();

  // Listen to window resize
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  //Apply Filters
  const finalStudents = Array.isArray(students) 
  ? students.filter((student) => {
    const matchesName = student.name
      .toLowerCase()
      .includes(nameFilter.toLowerCase());
    const matchesStatus = statusFilter
      ? student.status.toLowerCase() === statusFilter.toLowerCase()
      : true;
    return matchesName && matchesStatus;
  })
  : [];

  return (
    <div className="w-full min-h-screen flex flex-row gap-4 my-4 p-2">
      {/*Showing flash message*/}
      {serverMsg && (
        <div
          className={`fixed top-1/2 left-1/2 p-6 rounded-lg shadow-lg shadow-zinc-500 text-white transition-transform duration-300 ${
            status === "success" ? "bg-green-500" : "bg-red-500"
          }`}
          style={{ transform: "translate(-50%, -50%)" }}
        >
          {serverMsg}
        </div>
      )}

      <button
        onClick={() => setFilterIcon(!filterIcon)}
        className="flex md:hidden text-2xl text-white mx-2 mt-2 fixed top-2 left-1/3"
      >
        <FiFilter />
      </button>

      {(filterIcon || isLargeScreen) && (
        <div
          className={
            isLargeScreen
              ? "flex w-[22%] max-h-[500px] sticky top-8"
              : "fixed inset-0 z-50 flex items-center justify-center bg-black/10 bg-opacity-40"
          }
        >
          <div className="relative bg-black/30 rounded-xl shadow-lg p-6 w-[320px]">
            {!isLargeScreen && (
              <button
                type="button"
                className="absolute top-2 right-2 text-3xl font-bold text-gray-700 hover:text-red-500 transition"
                onClick={() => setFilterIcon(false)}
                aria-label="Close filter"
              >
                ×
              </button>
            )}
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">Filters</h2>
            <FilterStudents />
          </div>
        </div>
      )}
      <div className="flex-1 grid grid-cols-1 grid-rows-3 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {finalStudents.length > 0 ? (
          finalStudents.map((student, index) => {
            return (
              <div
                key={index}
                className="flex flex-col min-w-0 bg-gradient-to-bl from-cyan-300 via-yellow-200 to-teal-500 rounded-xl p-5 shadow-lg transition-transform duration-150"
              >
                <div className="mb-4 flex justify-between">
                  <span className="font-extrabold text-stone-700 [text-shadow:2px_2px_2px_rgba(0,0,0,0.3)] text-xl">
                    {student.name}
                  </span>
                  <div className="flex justify-between gap-2">
                    <Update id={student._id} student showAlert={showAlert} />
                    <Delete id={student._id} showAlert={showAlert} />
                  </div>
                </div>
                <div className="mb-2 font-bold text-sm text-blue-600">
                  <span className="font-bold text-md text-fuchsia-500">
                    School:
                  </span>{" "}
                  {student.school}
                </div>
                <div className="mb-2 font-bold text-sm text-indigo-600">
                  <span className="font-bold text-md text-green-500">
                    Class:
                  </span>{" "}
                  {student.stClass}
                </div>
                <div className="mb-2 font-bold text-md text-teal-500">
                  <span className="font-bold text-md text-red-500">
                    Fees Amount:
                  </span>{" "}
                  ₹{student.feesamount}
                </div>
                <div className="mb-2 font-bold text-md text-red-500">
                  <span className="font-bold text-md text-pink-600">
                    Status:
                  </span>{" "}
                  {student.status}
                  <span className="ml-8 text-sm text-orange-500">
                    {student.date}
                  </span>
                </div>
                <div className="text-sm font-semibold text-gray-700">
                  <span className="font-bold text-md text-red-600">Note:</span>{" "}
                  {student.notes}
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-4xl flex justify-center items-start text-gray-600 font-semibold col-span-full">
            No students found
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentsCards;
