import React from 'react'
import { ImGithub } from "react-icons/im";

const Github = () => {
  return (
    <div>
      <button className='flex items-center gap-2 border border-gray-300 rounded-md py-2 px-4 w-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300'>
                 <ImGithub className='text-xl text-orange-400 '/>
                  Github
             </button>
    </div>
  )
}

export default Github
