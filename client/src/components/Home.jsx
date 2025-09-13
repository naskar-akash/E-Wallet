import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-tr from-blue-900 via-pink-700 to-purple-900 animate-fade-in">
      <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-pink-400 to-cyan-300 mb-8 animate-bounce">
        Welcome to E-Wallet
      </h1>
      <p className="text-xl text-white mb-12 text-center max-w-xl animate-fade-in-slow">
        Manage your students and fees with ease. Secure, fast, and beautiful.
      </p>
      <button
        onClick={() => navigate("/Students")}
        className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white text-2xl font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-glow"
      >
        Get Started
      </button>
      {/* Custom keyframes for animation */}
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in { animation: fade-in 1s ease-out; }
          .animate-fade-in-slow { animation: fade-in 2s ease-out; }
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px 5px #f472b6, 0 0 40px 10px #3b82f6; }
            50% { box-shadow: 0 0 40px 15px #f472b6, 0 0 60px 20px #3b82f6; }
          }
          .animate-glow { animation: glow 2s infinite alternate; }
        `}
      </style>
    </div>
  )
}

export default Home
