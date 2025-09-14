import React,{useState} from 'react'
import { CiEdit } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { updateStudent } from './Service';

const Update = ({id,student,showAlert}) => {
const [open, setOpen] = useState(false)

//form handling
  const {
    register,
    handleSubmit,
    formState: { errors },reset
  } = useForm();

const onSubmit = async (data) => {
    try {
        const response = await updateStudent(id,
            data.status,
            data.notes
          );
          showAlert(response, "success", "error");
          setOpen(!open);
    } catch (error) {
        showAlert(error.response || error, "success", "error");
    }
    reset();
  }


  return (
    <div>
      <button onClick={() => setOpen(!open)}><CiEdit className='size-5'/></button>

      {/*form*/}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 bg-opacity-40">
        <form
          className="flex flex-col w-full max-w-md bg-black/50 px-6 py-2 rounded-lg shadow-lg"
          onSubmit={handleSubmit(onSubmit)}
          method="post"
        >
          <div className="flex justify-end ">
            <button
              type="button"
              className="p-2 text-2xl font-bold text-white"
              onClick={() => setOpen(!open)}
            >
              ×
            </button>
          </div>

          <div className="flex flex-row gap-8 mb-5">
            <div className="flex justify-center items-center mt-6">
              <label className="mb-2 text-lg font-bold mt-2">Status:</label>
              <select
                className="bg-zinc-200 rounded-md mx-3 my-2 p-1 outline-none"
                {...register("status")}
              >
                <option value="pending">pending</option>
                <option value="paid">paid</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col mb-5">
            <label className="mb-2 text-lg font-bold">Special Notes:</label>
            <input
              className="px-3 py-2 bg-zinc-200 outline-none rounded-md"
              type="text"
              value={student.note}
              {...register("notes")}
            />
          </div>
          <input
            className="px-3 py-2 mb-5 bg-blue-600 rounded-md text-white text-bold hover:cursor-pointer hover:bg-blue-500"
            type="submit"
          />
        </form>
        </div>
      )}
    </div>
  )
}

export default Update
