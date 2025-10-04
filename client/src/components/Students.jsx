import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddStudents from "./AddStudents";
import StudentsCards from "./StudentsCards";
import { StudentContext } from "./StudentContext";
import Footer from "./Footer";
import { logoutUser } from "./Service";
import AlertMsg from "./AlertMsg";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [filterIcon, setFilterIcon] = useState(false);
  const navigate = useNavigate();
  const { serverMsg, status, showAlert } = AlertMsg(2);

  const handleLogout = async () => {
    try {
      const response = await logoutUser();
      showAlert(response, "success", "error");
      navigate("/user");
    } catch (error) {
      showAlert(error.response || error, "success", "error");
    }
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        setStudents,
        nameFilter,
        setNameFilter,
        statusFilter,
        setStatusFilter,
        filterIcon,
        setFilterIcon,
      }}
    >
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
      <div className="w-full min-h-screen flex flex-col py-2 px-4 sm:px-10 sm:py-5 bg-gradient-to-tr from-blue-950 to-pink-900">
        <div className="w-full flex justify-start mb-5 gap-6">
          <button
            onClick={() => navigate(-1)}
            className="px-3 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-500 transition-all hover:cursor-pointer"
          >
            Back
          </button>
          <button
            onClick={handleLogout}
            className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all hover:cursor-pointer"
          >
            Logout
          </button>
        </div>
        <div className="w-full flex justify-between mb-5">
          <h1 className="text-2xl font-bold font-serif bg-gradient-to-r from-lime-300 to-rose-400 text-transparent bg-clip-text">
            Add Students here
          </h1>
          <AddStudents />
        </div>
        {/*cards*/}
        <StudentsCards />
        <Footer />
      </div>
    </StudentContext.Provider>
  );
};

export default Students;
