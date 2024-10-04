import React from 'react'
import { Link } from 'react-router-dom'

function HamNav() {
  return (
    <div>
      <div className="h-screen w-screen  flex justify-center items-center"> 
       <Link
              to="/LogIn"
              className=" font-bold hover:bg-gray-50 text-orange-700 focus:ring-4 focus:ring-gray-300  rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
    </div>
    </div>
  )
}

export default HamNav
