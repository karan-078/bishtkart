import React from 'react'
import error from "../assets/images/error.avif"
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div className='bg-white flex  flex-col items-center justify-center'>
        <div className='w-96'>
        <img src={error} alt={error} />
       
        </div>
        <Link to={"/"} className="bg-orange-600 p-2 mb-4 text-teal-50 rounded-sm">
            GO BACK TO HOME
        </Link>
    </div>
  )
}

export default ErrorPage
