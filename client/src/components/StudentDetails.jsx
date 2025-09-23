import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Update from "./Update";
import { getStudentsById } from "./Service";
import AlertMsg from "./AlertMsg";
import {useNavigate} from "react-router-dom"

const StudentDetails = () => {
  const navigate = useNavigate();
  const { serverMsg, status, showAlert } = AlertMsg(2);
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    async function fetchEachStudents() {
      try {
        const response = await getStudentsById(id);
        setStudent(response.data);
      } catch (error) {
        showAlert(error.response || error, "success", "error");
      }
    }
    fetchEachStudents();
  }, [id]);

  if (!student) {
    return <p>Loading student...</p>;
  }

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gradient-to-br from-blue-950 to-rose-700">
      <button
            onClick={() => navigate(-1)}
            className="fixed top-4 left-4 px-3 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-500 transition-all hover:cursor-pointer"
          >
            Back
          </button>
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

      <div className="m-4 flex flex-col w-full max-w-2xl bg-gradient-to-br from-cyan-200/80 via-yellow-100/80 to-teal-200/80 backdrop-blur-xl rounded-2xl p-4 shadow-2xl transition-transform duration-300">
        {/*headers*/}
        <div className="mb-6 flex justify-between items-center">
          <span className="font-extrabold text-gray-800 text-2xl drop-shadow-md">
            {student.name}
          </span>
          <div className="flex gap-3">
            <Update id={student._id} student showAlert={showAlert} />
          </div>
        </div>
        {/*info rows*/}
        <div className="space-y-3 text-gray-800">
          <div className="text-sm sm:text-base font-semibold italic flex gap-2">
            <span className="text-fuchsia-600 font-bold">School:</span>
            {student.school}
          </div>

          <div className="text-sm sm:text-base font-semibold italic flex gap-2">
            <span className="text-green-600 font-bold">Class:</span>
            {student.stClass}
          </div>

          <div className="text-sm sm:text-base font-semibold italic flex gap-2">
            <span className="text-red-600 font-bold">Fees Amount:</span>
            <span className="text-teal-600">₹{student.feesamount}</span>
          </div>

          <div className="text-sm sm:text-base font-semibold italic flex gap-2">
            <span className="text-pink-600 font-bold">Status:</span>
            {student.status}
          </div>

          <div className="text-sm sm:text-base font-semibold italic flex gap-2">
            <span className="text-orange-500 font-bold">Date:</span>
            {student.date}
          </div>

          <div className="text-sm sm:text-base font-semibold italic flex gap-2">
            <span className="text-red-600 font-bold">Note:</span>
            {student.notes || "---"}
          </div>

          <div className="text-sm sm:text-base font-semibold italic flex gap-2">
            <span className="text-red-600 font-bold">Contact:</span>+91{" "}
            {student.contact}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
