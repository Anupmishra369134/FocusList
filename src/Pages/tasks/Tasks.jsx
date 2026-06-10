import React from 'react'
import { FaPlus } from "react-icons/fa6";
import logo from '../../assets/logo.png'
import { MdOutlineDashboard } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { RiFocus3Line } from "react-icons/ri";
import { MdOutlineSettings } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";  //downarrow
import { IoIosArrowUp } from "react-icons/io";   //uparrow
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Tasks = () => {
    const [priority, setPriority]= useState("Low")
    const [color, setColor]= useState("Change")
    const [openMenu, setOpenMenu] = useState(null);
    const navigate = useNavigate();


     const handleDelete = (id) => { const updatedTasks = tasks.filter(
        (task) => task.id !== id
    );

    setTasks(updatedTasks);

    localStorage.setItem(
        "tasks",
        JSON.stringify(updatedTasks)
    );
}


     const handleEdit = (task) => {
      localStorage.setItem(
        "editTask",
        JSON.stringify(task)
      );
    
      navigate("/addtask");
    };
    
    
        const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
      const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
      console.log(savedTasks);
    
      setTasks(savedTasks.filter(task => task !== null));
    }, []);
    
        const handleComplete = (id) => {
      console.log("Complete clicked", id);
    
      const updatedTasks = tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      );
    
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };
    
    const completedTasks = tasks.filter(
      (task) => task?.completed === true
    ).length;
    
    const pendingTasks = tasks.filter(
      (task) => task?.completed !== true
    ).length;
  return (
    <div>
     <header className='flex items-center justify-between shadow-md md:gap-10 gap-4 ml-4 mt-2 md:mt-0'>
        <div className='flex gap-8'>
        <div className="logo-container  hidden md:flex">
          <img src={logo} alt="Logo" className='w-32 sm:w-40 md:w-48 h-auto' />
        </div>
        

        {/* Add Task Content */}
        <div className="add-task flex items-center gap-1 ">
            <Link to="/dashboard">

                <button className='ml-1 sm:ml-2'>
                    <FaArrowLeftLong className='inline-block mr-2' />
                </button>
            </Link>

            {/* heading */}
            <div>
            <h1 className='text-sm sm:text-lg font-semibold'>
                Tasks
            </h1>
            <p className='text-xs sm:text-sm text-gray-500'>
                Manage and organize all your tasks.
                </p>
                
            </div>
            </div>
        </div>


        {/* search icon */}
        <div className="search flex items-center " >
            <button className='block md:hidden '>
                <IoSearchSharp className='text-2xl'/>
            </button>
            <div className='hidden md:block relative'>
            <IoSearchSharp className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 '/>
            <input type="search"
            placeholder='Search Task ...'
            className='border w-60 lg:w-80 h-11 pl-10 pr-4  border-gray-300 rounded-xl outline-none'
            />
            </div>
            
            
        </div>

        {/* more icon */}
        <div className="more-icon flex items-center text-2xl gap-5 md:gap-10">

            <HiOutlineBellAlert/>
            <CgProfile className='mr-4 md:mr-10 '/>
        </div>
        


     </header>

     {/* navbar */}
     <div className='flex'>

    <nav className='mt-6 px-4 space-y-2  flex flex-col'>
        <Link to='/addtask'>
        <div>
         <button className='md:flex w-48 bg-blue-600 rounded-md text-white px-4 py-3 gap-3 font-semibold hidden text-center hover:bg-blue-800 mt-6 '>
                <FaPlus className='text-xl text-white '/>
                Add New Task
            </button>
            </div>
            </Link>


            {/* mininav */}
            {/* <div className="mini mt-6 px-4 space-y-2 "> */}

                <Link to ='/dashboard'>
               <button onClick={()=> setColor("Change")}
                className='md:flex w-48 bg-gray-100 border mt-5 border-gray-800 outline-none rounded-md text-gray-700 px-4 py-3 gap-4 font-semibold hidden items-center hover:bg-gray-300 '>
                <MdOutlineDashboard className='text-xl text-gray-700 '/>
                Dashboard
            </button>
            </Link>

            {/* Tasks */}
            <button className='md:flex w-48 bg-blue-50 border mt-5 border-blue-800 outline-none rounded-md text-blue-700 px-4 py-3 gap-4 font-semibold hidden items-center hover:bg-blue-300 '>
                <BiTask className='text-xl text-blue-700 '/>
                Tasks
            </button>

            {/* Focus-Mode */}
            <button className='md:flex w-48 bg-gray-100 border mt-5 border-gray-800 outline-none rounded-md text-gray-700 px-4 py-3 gap-4 font-semibold hidden items-center hover:bg-gray-300'>
                <RiFocus3Line className='text-xl text-gray-700 '/>
                Focus Mode
            </button>

            {/* Setting */}
            <button className='md:flex w-48 bg-gray-100 border mt-5 border-gray-800 outline-none rounded-md text-gray-700 px-4 py-3 gap-4 font-semibold hidden items-center hover:bg-gray-300'>
                <MdOutlineSettings className='text-xl text-gray-700 '/>
                Setting
            </button>


           

            {/* </div> */}
    </nav>
  

      


<div >
    

    <nav className="fixed bottom-0 left-0 w-full bg-white  border-t md:hidden">
  <div className="flex justify-around items-center h-16">

     <Link to = '/dashboard'>
    <button className="flex flex-col items-center">
      <MdOutlineDashboard className="text-xl" />
      <span className="text-xs">Dashboard</span>
    </button>
    </Link>

    <button className="flex flex-col text-blue-700  items-center">
      <BiTask className="text-xl" />
      <span className="text-xs">Tasks</span>
    </button>

        <Link to = '/addtask'>
         <button className="flex flex-col text--700  items-center">
               <FaPlus className="text-xl" />
               <span className="text-xs">Add</span>
             </button>
             </Link>
     


    <button className="flex flex-col items-center">
      <RiFocus3Line className="text-xl" />
      <span className="text-xs">Focus</span>
    </button>

    <button className="flex flex-col items-center">
      <MdOutlineSettings className="text-xl" />
      <span className="text-xs">Settings</span>
    </button>

  </div>
</nav>
</div>






  <div className="flex-1 p-3 justify-center ">
  <h2 className="text-2xl font-bold mb-4">
    Your Tasks
  </h2>


  <div className="grid gap-4 ">
    {tasks.length > 0 ? (
      tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white shadow-sm border rounded-2xl p-4 mb-4 flex items-center justify-between hover:shadow-md transition"
        >
          {/* Left Side */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleComplete(task.id)}
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
              ${
                task.completed
                  ? "bg-green-500 border-green-500 text-white"
                  : "border-gray-400"
              }`}
            >
              {task.completed && "✓"}
            </button>
            <div>
              <h3 className="font-semibold text-lg">
                {task.title}
              </h3>

              <p className="text-gray-500 text-sm">
                🚩 {task.priority || "Low"} Priority
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <span
              className={`px-4 py-2 rounded-xl text-sm font-medium
              ${
                task.category === "Work"
                  ? "bg-green-100 text-green-700"
                  : task.category === "Study"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-purple-100 text-purple-700"
              }`}
            >
              {task.category}
            </span>

           <div className="relative">
  <button
    onClick={() =>
      setOpenMenu(
        openMenu === task.id ? null : task.id
      )
    }
    className="text-2xl"
  >
    ⋮
  </button>

  {openMenu === task.id && (
    <div className="absolute right-0 mt-2 bg-white shadow-lg border rounded-lg w-32 z-50">
      <button
        onClick={() => handleEdit(task)}
        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
      >
        ✏️ Edit
      </button>

      <button
        onClick={() => handleDelete(task.id)}
        className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
      >
        🗑️ Delete
      </button>
    </div>
  )}
</div>
          </div>
        </div>
      ))
    ) : (
      <p>No tasks yet</p>
    )}
  </div>
</div>
</div>
</div>
  )
}

export default Tasks