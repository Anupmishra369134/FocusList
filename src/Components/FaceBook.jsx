import React from 'react'
import { SiFacebook } from "react-icons/si";

const FaceBook = () => {
  return (
    <div>
      
       <button className='flex items-center gap-2 border border-gray-300 rounded-md py-2 px-4 w-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300'>
                       <SiFacebook className='text-xl text-blue-500 '/>
                        Facebook
                   </button>
    </div>
  )
}

export default FaceBook
