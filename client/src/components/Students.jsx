import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import AddStudents from './AddStudents';
import StudentsCards from './StudentsCards';
import {StudentContext} from "./StudentContext"

const Students = () => {
  const [students, setStudents] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("")
    const navigate = useNavigate();

  return (
    <StudentContext.Provider value={{students,setStudents,nameFilter,setNameFilter,statusFilter,setStatusFilter}}>
    <div className='w-full min-h-screen flex flex-col py-2 px-4 sm:px-10 sm:py-5 bg-gradient-to-tr from-blue-950 to-pink-900'>
      <div className='w-full flex justify-start mb-5'>
      <button onClick={() => navigate(-1)} className='px-3 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-500 transition-all hover:cursor-pointer'>Back</button>
      </div>
      <div className='w-full flex justify-between mb-5'>
        <h1 className='text-2xl font-bold font-serif bg-gradient-to-r from-lime-300 to-rose-400 text-transparent bg-clip-text'>Add Students here</h1>
        <AddStudents/>
      </div>
        {/*cards*/}
        <StudentsCards />
    </div>
    </StudentContext.Provider>
  )
}

export default Students
