import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-blue-400 min-h-screen flex items-center justify-center '>
      <div className="min-h-screen flex items-center justify-center bg-[#f7f8f8] px-4">
      
      {/* Content Box */}
      <div className="w-full max-w-xs flex flex-col justify-end h-[500px]">
        
        {/* Text */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">
            Welcome to PopX
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* Buttons */}
        <Link
          to="/signup"
          className="bg-purple-700 text-white py-3 rounded-md text-center mb-3 w-full"
        >
          Create Account
        </Link>

        <Link
          to="/login"
          className="bg-gray-300 text-gray-700 py-3 rounded-md text-center w-full"
        >
          Already Registered? Login
        </Link>

      </div>

    </div>
      
    </div>
  )
}

export default Home;