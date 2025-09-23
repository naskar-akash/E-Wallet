import React from "react";
import Delete from "./Delete";
import AlertMsg from "./AlertMsg";
import {useNavigate} from "react-router-dom"

const StudentTable = ({ finalStudents }) => {
  const { serverMsg, status, showAlert } = AlertMsg(2);
  const navigate = useNavigate();

  const handleNameClick = async (id) => {
    navigate(`/students/${id}`);
  }

  return (
    <div className="flex-1 px-2 overflow-x-auto">
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
      <table className="min-w-full border-collapse divide-y divide-gray-200">
        <thead>
          <tr className="bg-gradient-to-r from-cyan-300 via-yellow-200 to-teal-500 text-gray-800">
            <th className="p-2 text-left rounded-tl-md">Sl. No.</th>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Class</th>
            <th className="p-2 text-left rounded-tr-md">Contact</th>
          </tr>
        </thead>
        <tbody className="divide-y-2 divide-gray-200 ">
          {finalStudents.length > 0 ? (
            finalStudents.map((student, index) => (
              <tr
                key={index}
                className="group hover:bg-gray-50 hover:text-gray-900  transition duration-400"
              >
                <td className="p-2 text-left text-white/70 font-semibold group-hover:text-gray-900 rounded-bl-md">{index + 1}</td>
                <td
                  className="p-2 text-left text-white/70 font-semibold cursor-pointer hover:underline group-hover:text-gray-900"
                  onClick={()=>handleNameClick(student._id)}
                >
                  {student.name}
                </td>
                <td className="p-2 text-left text-white/70 font-semibold group-hover:text-gray-900">
                  {student.stClass}
                </td>
                <td className="flex justify-between gap-2 p-2 text-left text-white/70 group-hover:text-gray-900">
                  {student.contact}
                  <span><Delete id={student._id} showAlert={showAlert} /></span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="4"
                className="text-4xl flex justify-center items-start text-gray-600 font-semibold"
              >
                No Students
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
