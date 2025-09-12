import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

  return (
    <div className='w-full max-h-screen p-5'>
      <button onClick={() => navigate("/Students")} className='px-3 py-2 bg-blue-500 text-white rounded-md'>Get Start</button>
    </div>
  )
}

export default Home
