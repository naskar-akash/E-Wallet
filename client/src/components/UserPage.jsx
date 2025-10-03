import React from "react";
import { useForm } from "react-hook-form";
import UserLog from "./UserLog";
import { useNavigate } from "react-router-dom";
import { getAllStudents, registerUser } from "./Service";
import AlertMsg from "./AlertMsg";

const UserPage = () => {
  const { serverMsg, status, showAlert } = AlertMsg(2);
  const navigate = useNavigate();

  //form handling
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Submitting the form
  const onSubmit = async (data) => {
    try {
      const response = await registerUser(data.name, data.email, data.password);
      showAlert(response, "success", "error");
    } catch (error) {
      showAlert(error.response || error, "success", "error");
    }
  };

  //getting students
  const handleStudents = async() => {
    try {
      const response = await getAllStudents();
      if (Array.isArray(response.data)) {
        navigate("/students");
      } else {
        showAlert(response.data.message, "success", "error");
        navigate("/user");
      }
    } catch (error) {
      showAlert(error.response || error, "success", "error");
      navigate("/user");
    }
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-r from-stone-600 to-amber-600 p-10 gap-4">
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

      <div className="w-full flex flex-col justify-between items-center">
        <h2 className="text-6xl font-bold mb-5 text-gray-100">Create User</h2>
        <div className="w-full flex flex-row justify-between">
        <button
          className="hover:bg-emerald-600 p-2 bg-emerald-500 text-white rounded-md"
          onClick={() => navigate("/")}
        >
          Back
        </button>
        <button
          className="hover:bg-purple-500 p-2 bg-violet-600 text-white rounded-md"
          onClick={handleStudents}
        >
          Students
        </button>
        </div>
      </div>
      <div className="flex w-full justify-center items-center gap-4 flex-col sm:flex-row">
        <div className="min-h-[400px] p-2 flex flex-[0.8] flex-col items-center justify-center">
          <h2 className="mb-6 text-2xl font-bold text-blue-100">
            Register new user
          </h2>
          <form
            className="w-full flex flex-col gap-5 max-w-md"
            onSubmit={handleSubmit(onSubmit)}
            method="post"
          >
            <input
              type="text"
              name="name"
              placeholder="Full name"
              className="px-3 py-2 bg-zinc-200 rounded-sm outline-none"
              {...register("name", {
                required: { value: true, message: "This field is required" },
              })}
            />
            {errors.name && (
              <span className="text-sm text-red-600 mt-1">
                {errors.name.message}
              </span>
            )}
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="px-3 py-2 bg-zinc-200 rounded-sm outline-none"
              {...register("email", {
                required: { value: true, message: "This field is required" },
              })}
            />
            {errors.email && (
              <span className="text-sm text-red-600 mt-1">
                {errors.email.message}
              </span>
            )}
            <input
              type="password"
              name="password"
              className="px-3 py-2 bg-zinc-200 rounded-sm outline-none"
              {...register("password", {
                required: { value: true, message: "This field is required" },
              })}
            />
            {errors.password && (
              <span className="text-sm text-red-600 mt-1">
                {errors.password.message}
              </span>
            )}
            <input
              type="submit"
              value="Create User"
              className="px-3 py-2 bg-sky-600 text-white font-bold text-lg rounded-sm hover:bg-blue-700"
            />
          </form>
        </div>

        <div className="min-h-[400px] p-2 flex flex-[0.8] flex-col items-center justify-center">
          <h2 className="mb-6 text-2xl font-bold text-blue-100">Login</h2>
          <UserLog />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
