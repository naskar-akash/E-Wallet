import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Students from './components/Students'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/students" element={<Students/>} />
      </Routes>
    </Router>
  )
}

export default App
