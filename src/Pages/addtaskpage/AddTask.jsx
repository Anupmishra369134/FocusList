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
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";  //downarrow
import { IoIosArrowUp } from "react-icons/io";   //uparrow
import { useEffect } from 'react';



const AddTask = () => {
    const [priority, setPriority]= useState("Low")
    const [color, setColor]= useState("Change")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    // const [priority, setPriority] = useState("")

    const navigate = useNavigate();


    const handleAddTask = () => {
  const oldTasks =
    JSON.parse(localStorage.getItem("tasks")) || [];

  const newTask = {
    id: Date.now(),
    title: title,
    description,
    category,
    priority,
  };

  oldTasks.push(newTask);

  localStorage.setItem(
    "tasks",
    JSON.stringify(oldTasks)
  );

  setTitle("");
  setDescription("");
  setCategory("");
  setPriority("");
  alert("Task Added!");
  navigate("/dashboard")
};


const handleCancel = () => {
    setTitle("");
    setDescription("");
    setCategory("");
    setPriority("");
}


useEffect(() => {
  const editTask = JSON.parse(
    localStorage.getItem("editTask")
  );

  if (editTask) {
    setTitle(editTask.title || "");
    setDescription(editTask.description || "");
    setCategory(editTask.category || "");
    setPriority(editTask.priority || "Low");
  }
}, []);


const handleSave = () => {
  const savedTasks =
    JSON.parse(localStorage.getItem("tasks")) || [];

  const editTask =
    JSON.parse(localStorage.getItem("editTask"));

  if (editTask) {
    // UPDATE TASK
    const updatedTasks = savedTasks.map((task) =>
      task.id === editTask.id
        ? {
            ...task,
            title,
            description,
            category,
            priority,
          }
        : task
    );

    localStorage.setItem(
      "tasks",
      JSON.stringify(updatedTasks)
    );

    localStorage.removeItem("editTask");
  } else {
    // ADD NEW TASK
    const newTask = {
      id: Date.now(),
      title,
      description,
      category,
      priority,
      completed: false,
    };

    localStorage.setItem(
      "tasks",
      JSON.stringify([...savedTasks, newTask])
    );
  }

  navigate("/dashboard");
};


return (
    <div>
    <header className='flex items-center justify-between shadow-md md:gap-10 gap-4 ml-4 mt-2 md:mt-0'>
        <div className='flex gap-8'>
        <div className="logo-container  hidden md:flex">
        <img src={logo} alt="Logo" className='w-32 sm:w-40 md:w-48 h-auto' />
        </div>
        

        {/* Add Task Content */}
        <div className="add-task flex items-center gap-1 ">
            {/* <Link to="/tasks"> */}
            <Link to = '/dashboard'>
                <button className='ml-1 sm:ml-2'>
                    <FaArrowLeftLong className='inline-block mr-2' />
                </button>
                </Link>
            {/* </Link> */}

            {/* heading */}
            <div>
            <h1 className='text-sm sm:text-lg font-semibold'>
                Add New Task
            </h1>
            <p className='text-xs sm:text-sm text-gray-500'>
                Create a task and stay productive
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
        {/* <Link to='/addtask'> */}
        <div>
        <button className='md:flex w-48 bg-blue-600 rounded-md text-white px-4 py-3 gap-3 font-semibold hidden text-center hover:bg-blue-800 mt-6 '>
                <FaPlus className='text-xl text-white '/>
                Add New Task
            </button>
            {/* </Link> */}
            </div>


            {/* mininav */}
            {/* <div className="mini mt-6 px-4 space-y-2 "> */}

                <Link to = '/dashboard'>
                <button onClick={()=> setColor("Change")}
                className={`md:flex w-48 bg-gray-100 border mt-5 border-gray-800 outline-none rounded-md text-gray-700 px-4 py-3 gap-4 font-semibold hidden items-center hover:bg-gray-300
                    ${color === "Change"
                        ? "border-blue-500 bg-blue-50 text-blue-600"
        : "border-gray-200"
                    }`}>
                <MdOutlineDashboard className='text-xl text-gray-700 '/>
                Dashboard
            </button>
            </Link>

            {/* Tasks */}
            <Link to= '/tasks'>
            <button className='md:flex w-48 bg-gray-100 border mt-5 border-gray-800 outline-none rounded-md text-gray-700 px-4 py-3 gap-4 font-semibold hidden items-center hover:bg-gray-300 '>
                <BiTask className='text-xl text-gray-700 '/>
                Tasks
            </button>
            </Link>
        
            

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


    </nav>


<div>

    <nav className="fixed bottom-0 left-0 w-full bg-white border-t md:hidden">
    <div className="flex justify-around items-center h-16">
                <Link to = '/dashboard'>
    <button className="flex flex-col items-center">
        <MdOutlineDashboard className="text-xl" />
        <span className="text-xs">Dashboard</span>
    </button>
    </Link>
        
        <Link to = '/tasks'>
    <button className="flex flex-col items-center">
        <BiTask className="text-xl" />
        <span className="text-xs">Tasks</span>
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


{/* mid section all content */}

        <div className="mid-section flex flex-col  md:gap-8 mt-3 md:mx-6 w-full ">
            {/* Title */}

            <div className="tittle w-2/3   ">
            <h1 className='font-semibold'>Task Tittle</h1>
            <input type="text " 
            placeholder='e.g Complete UI Design '
            value={title}
            onChange={(e) =>
                setTitle(e.target.value)
            }
            className='w-full  border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500 resize-nonel'
            />
            </div>

            {/* Description section */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pr-12">

  {/* Left Section */}
    <div className="lg:col-span-3 mt-3">
    <label className="block text-sm font-medium mb-2">
        Description
    </label>

    <textarea
        placeholder="Add task description"
        value={description}
        onChange={(e) =>
            setDescription(e.target.value)
        }
        className="w-full h-40 border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
    />
    </div>

  {/* Right Section */}
    <div className="lg:col-span-1 relative">
    <label className="block text-sm font-medium mb-2">
        Category
    </label>

    <select
    value={category}
    onChange={(e)=>
        setCategory(e.target.value)
    }
        className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
    >
    <option>Select Category</option>
    <option >Work</option>
    <option>Personal</option>
    <option>Study</option>
    <option>Health</option>
    </select>
  </div>

</div>



        
        {/* priority */}
        <div className="mt-6">
    <h3 className="font-semibold mb-3">Priority</h3>

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">

    <button
        onClick={() => setPriority("Low")}
        className={`border rounded-xl py-3 font-medium
        ${priority === "Low"
        ? "border-blue-500 bg-blue-50 text-blue-600"
        : "border-gray-200"
        }`}
    >
        🔵 Low
    </button>

    <button
        onClick={() => setPriority("Medium")}
        className={`border rounded-xl py-3 font-medium
        ${priority === "Medium"
        ? "border-yellow-500 bg-yellow-50 text-yellow-600"
        : "border-gray-200"
        }`}
    >
        🟡 Medium
    </button>

    <button
        onClick={() => setPriority("High")}
        className={`border rounded-xl py-3 font-medium
        ${priority === "High"
        ? "border-red-500 bg-red-50 text-red-600"
        : "border-gray-200"
        }`}
    >
        🔴 High
    </button>

    

</div>
</div>
    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 mt-6 mb-24 mr-10">
    <button
    onClick={handleCancel}

    className="w-full border border-black py-3 font-semibold rounded-xl hover:bg-gray-100"
    >
    Cancel
    </button>


    <button onClick={handleSave}
    className="w-full bg-blue-700 text-white font-semibold rounded-xl py-3 hover:bg-blue-800">
  {localStorage.getItem("editTask")
    ? "Update Task"
    : "Add Task"}
</button>

    {/* <button
    onClick={() => {
        handleAddTask();
        navigate("/dashboard")
    }}
    className="w-full bg-blue-700 text-white font-semibold rounded-xl py-3 hover:bg-blue-800"
    >
    Add Task
    </button> */}
</div>
        </div>


    </div>
    
    
    </div>
    )
}

export default AddTask
