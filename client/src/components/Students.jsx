import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoMdPersonAdd } from "react-icons/io";

const Students = () => {
    const navigate = useNavigate();

    const handleAdd = () => {
        console.log("clicked")
    }

  return (
    <div className='w-full max-h-screen flex flex-col justify-center items-center py-5 px-10 bg-gradient-to-tr from-blue-950 to-pink-900'>
      <div className='w-full flex justify-start mb-5'>
      <button onClick={() => navigate(-1)} className='px-3 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-500 transition-all hover:cursor-pointer'>Back</button>
      </div>
      <div className='w-full flex justify-between mb-5'>
        <h1 className='text-2xl font-bold font-serif bg-gradient-to-tr from-lime-300 via-amber-200 to-rose-400 text-transparent bg-clip-text'>Add Students here</h1>
        <button onClick={() => {handleAdd}} className='text-3xl text-white'><IoMdPersonAdd /></button>
      </div>
    </div>
  )
}

export default Students
