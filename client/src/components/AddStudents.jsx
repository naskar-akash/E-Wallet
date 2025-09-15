import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { addStudents } from "./Service";
import { IoMdPersonAdd } from "react-icons/io";
import AlertMsg from "./AlertMsg";

const AddStudents = () => {
  const [open, setOpen] = useState(false);
  const { serverMsg, status, showAlert } = AlertMsg(2);

  //form handling
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //submitting
  const onSubmit = async (data) => {
    try {
      const response = await addStudents(
        data.name,
        data.stClass,
        data.school,
        data.feesamount,
        data.status,
        data.notes
      );
      showAlert(response, "success", "error");
      setOpen(!open);
    } catch (error) {
      showAlert(error.response || error, "success", "error");
    }
  };

  return (
    <div>
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

      {/*add button*/}
      <button onClick={() => setOpen(!open)} className="fixed right-10 top-8 text-3xl text-white">
        <IoMdPersonAdd />
      </button>

      {/*form*/}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 bg-opacity-40">
        <form
          className="flex flex-col w-[85vw] max-w-md bg-white px-4 py-2 sm:p-6 rounded-lg shadow-lg"
          onSubmit={handleSubmit(onSubmit)}
          method="post"
        >
          <div className="flex justify-end ">
            <button
              type="button"
              className="p-2 text-2xl font-bold"
              onClick={() => setOpen(!open)}
            >
              ×
            </button>
          </div>
  
            <div className="flex flex-col gap-2 mb-5">
              <label className="mb-2 text-lg font-bold">Name:*</label>
              <input
                className="px-3 py-2 bg-zinc-200 outline-none rounded-md"
                type="text"
                {...register("name", {
                  required: { value: true, message: "Name is required" },
                })}
              />
              {errors.name && (
                <div className="text-red-500 text-sm">
                  {errors.name.message}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2 mb-5">
              <label className="mb-2 text-lg font-bold">Class:*</label>
              <select
                className="bg-zinc-200 rounded-md p-1 outline-none"
                {...register("stClass")}
              >
                <option value="VIII">VIII</option>
                <option value="IX">IX</option>
                <option value="X">X</option>
                <option value="XI">XI</option>
                <option value="XII">XII</option>
              </select>
            </div>

          <div className="flex flex-col gap-2 mb-5">
            <label className="mb-2 text-lg font-bold">School:*</label>
            <input
              className="px-3 py-2 bg-zinc-200 outline-none rounded-md"
              type="text"
              {...register("school", {
                required: { value: true, message: "School is required" },
              })}
            />
            {errors.school && (
              <div className="text-red-500 text-sm">
                {errors.school.message}
              </div>
            )}
          </div>

            <div className="flex flex-col gap-2 mb-5">
              <label className="mb-2 text-lg font-bold">Fees Amount:*</label>
              <input
                className="px-3 py-2 bg-zinc-200 outline-none rounded-md"
                type="number"
                {...register("feesamount", {
                  required: { value: true, message: "Fees Amount is required" },
                })}
              />
              {errors.feesamount && (
                <div className="text-red-500 text-sm">
                  {errors.feesamount.message}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2 mb-5">
              <label className="mb-2 text-lg font-bold">Status:</label>
              <select
                className="bg-zinc-200 rounded-md p-1 outline-none"
                {...register("status")}
              >
                <option value="pending">pending</option>
                <option value="paid">paid</option>
              </select>
            </div>

          <div className="flex flex-col gap-2 mb-5">
            <label className="mb-2 text-lg font-bold">Special Notes:</label>
            <input
              className="px-3 py-2 bg-zinc-200 outline-none rounded-md"
              type="text"
              {...register("notes")}
            />
          </div>

          <input
            className="px-3 py-2 mb-5 bg-blue-600 rounded-md text-white text-bold hover:cursor-pointer hover:bg-blue-500"
            type="submit"
            value="Add Student"
          />
        </form>
        </div>
      )}
    </div>
  );
};

export default AddStudents;
