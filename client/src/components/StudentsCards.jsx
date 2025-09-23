import React, { useEffect, useState } from "react";
import { getAllStudents } from "./Service";
import FilterStudents from "./FilterStudents";
import { useStudentContext } from "./StudentContext";
import { FiFilter } from "react-icons/fi";
import AlertMsg from "./AlertMsg";
import StudentTable from "./StudentTable";

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
        showAlert(error.response || error, "success", "error");
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
    <div className="w-full min-h-screen flex flex-row justify-between gap-6 my-4">
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
        className="flex md:hidden text-2xl text-white mx-2 mt-2 fixed top-2 left-3/5"
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
      <StudentTable finalStudents={finalStudents}/>
    </div>
  );
};

export default StudentsCards;
