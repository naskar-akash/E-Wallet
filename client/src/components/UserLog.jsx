import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./Service";
import AlertMsg from "./AlertMsg";

const UserLog = () => {
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
      const response = await loginUser(data.email, data.password);
      showAlert(response, "success", "error");
      navigate("/students");
    } catch (error) {
      showAlert(error.response || error, "success", "error");
    }
    
  };

  return (
    <form
      className="w-full flex flex-col gap-5 max-w-md"
      onSubmit={handleSubmit(onSubmit)}
      method="post"
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
        value="Login"
        className="px-3 py-2 bg-sky-600 text-white font-bold text-lg rounded-sm hover:bg-blue-700"
      />
    </form>
  );
};

export default UserLog;
