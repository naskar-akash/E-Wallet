import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Students from './components/Students'
import User from './components/UserPage'
import StudentDetails from './components/StudentDetails'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/user' element={<User/>} />
        <Route path="/students" element={<Students/>} />
        <Route path="/students/:id" element={<StudentDetails/>} />
      </Routes>
    </Router>
  )
}

export default App
