import React from 'react'
import { FcGoogle } from "react-icons/fc";

const Google = () => {
  return (
    <div>
        <button className='flex items-center gap-2 border border-gray-300 rounded-md py-2 px-4 w-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300'>
            <FcGoogle className='text-xl'/>
             Google
        </button>
    </div>
  )
}

export default Google
