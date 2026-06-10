import { useState } from 'react'
import Login from './Pages/loginpage/Login'
import SignUp from './Pages/signuppage/SignUp'
import DashBoard from './Pages/dashboardpage/DashBoard'
import AddTask from './Pages/addtaskpage/AddTask'
// import Focusmode from './Pages/Focusmode/FocusMode'
import Tasks from  './Pages/tasks/Tasks'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/addtask" element={<AddTask />} />
        {/* <Route path="/focusmode" element={<FocusMode />} /> */}
        {/* <Route path="/setting" element={<Setting />} /> */}
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </Router>
    
      {/* <Login /> */}
      {/* <DashBoard /> */}
      {/* <AddTask/> */}
      {/* <Tasks/> */}
      
      
    </>
  );
}

export default App
