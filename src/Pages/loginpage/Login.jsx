import React from 'react'
// import { GithubAuthProvider, signInWithPopup } from 'firebase/auth/web-extension'
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from '../../firebase'
import logo from '../../assets/logo.png'
import extra from '../../assets/extra.png'
import LoginBtn from '../../Components/LoginBtn'
// import SignUpBtn from '../../Components/SignUpBtn'
import { GiProgression } from "react-icons/gi";
import { RiFocus2Line } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { AiOutlineFileProtect } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { GoEye } from "react-icons/go";
import Google from '../../Components/Google'
import Github from '../../Components/Github'
import FaceBook from '../../Components/FaceBook'
import { LuEyeClosed } from "react-icons/lu";
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
   const [showPassword, setShowPassword] = useState(false);
   const githubProvider = new GithubAuthProvider();
   const googleProvider = new GoogleAuthProvider();
   const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
   const navigate = useNavigate();

const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log(result.user);
    alert("Google Login Success");
    navigate ('/dashboard')
  } catch (error) {
    console.log(error);
  }
};

const handleGithubLogin = async () => {
  try {
    const result = await signInWithPopup(auth, githubProvider);
    console.log(result.user);
    alert("GitHub Login Success");
    navigate ('/dashboard')
  } catch (error) {
    console.log(error);
  }
};
const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log(userCredential.user);
    alert("Login Successfully");

    navigate("/dashboard");

  } catch (error) {
    alert(error.message);
  }
};

// const handleGoogleLogin = async () => {
//   try {
//     const result = await signInWithPopup(auth, googleProvider);

//     console.log(result.user);
//     alert("GitHub Login Success");
//   } catch (error) {
//     console.log(error);
//     alert(error.message);
//   }
// };
  return (
    <>

    {/* Header */}
      <header className='flex justify-between items-center p-2 bg-white shadow-md'>
      <div className="logo-container">
        <img src={logo} alt="Logo" 
        className='w-24 sm:w-32 md:w-40 h-auto'
        />
      </div>

      {/* Buttons Container */}
      <div className="btn mx-2 flex space-x-4">
        <LoginBtn />
        <Link to="/signup">
          <LoginBtn bgColor='bg-white'
          text='Sign Up'
          textColor='text-gray-700'
          hoverColor='hover:bg-gray-200'
          borderColor='border-gray-300'
           />
        </Link>
      </div>
       
      </header>
       <div className="mid flex items-center flex-col sm:flex-row  min-h-[calc(100vh-90px)]">
        <div className="left-container w-full md:w-1/2  justify-center items-center px-12 lg:px-10 rounded-md lg:mx-15">

      {/* left Welcome-Container */}
        <div className="Welcome-Container">

        <div className='font-bold sm:text-xl md:text-2xl lg:text-3xl   mt-5' >Welcome to FocusList</div>
        <div className='font-medium text-sm sm:text-base text-gray-600   mt-2' >Sign in to continue organizing your tasks  <br />and achieve more every day</div>
        </div>

        {/* feature container */}
        <div className="feature">
            <div className="icon-heading flex items-center space-x-4 mt-10">
                <RiFocus2Line className='text-4xl text-blue-500 sm:text-4xl md:text-4xl'/>
                  
                {/* heading */}
                <div className="heading">
                    <h1 className='font-bold'>Stay Focused</h1>
                    <p className='text-gray-700'>Organize tasks and eliminate distractions.</p>
                </div>
            </div>

            {/* Progress */}
             <div className="icon-heading flex items-center space-x-4 mt-6">
                <GiProgression className='text-4xl text-green-500 sm:text-4xl md:text-4xl'/>
                  
                {/* heading */}
                <div className="heading">
                    <h1 className='font-bold'>Track Progress</h1>
                    <p className='text-gray-700'>Monitor your daily progress and habits.</p>
                </div>
            </div>

            {/* Access Anywhere */}
             <div className="icon-heading flex items-center space-x-4 mt-6">
                <AiOutlineFileProtect className='text-4xl text-orange-500 sm:text-4xl md:text-4xl'/>
                  
                {/* heading */}
                <div className="heading">
                    <h1 className='font-bold'>Access Anywhere</h1>
                    <p className='text-gray-700'>Your tasks sync across all your devices.</p>
                </div>
            </div>
        
        </div>

        {/* image container */}
        <div className="image-container flex justify-center md:justify-start mt-8">
        <img src={extra} alt="extra" 
        className='w-48 sm:w-56 md:w-64 h-auto   '
        />
      </div>

        </div>

        {/* Right Container */}
        <div className="right-section  items-center w-full md:w-1/2  justify-center px-12 lg:px-10 rounded-md lg:mr-10 ">
            <div className="login">
                 <div className="login-Container text-center ">

        <div className='font-bold sm:text-xl md:text-2xl lg:text-3xl font-gray-800   mt-5' >Login to <span className='text-blue-500'>FocusList</span></div>
        <div className='font-medium text-sm sm:text-base text-gray-600   mt-2' >Welcome to FocusList! Please enter your details.</div>
        </div>
            </div>

            {/* Email-fill-section */}
            <div className="Email-section ">
                <div className='font-semibold text-sm sm:text-base text-black mt-10' >
                    Email Address
                </div>
                        <div className="relative items-center">
                <MdOutlineMailOutline className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-700 text-xl'/>
                <input 
                value={email}
                    onChange={(e) => setEmail(e.target.value)}
                type="email" 
                placeholder='Enter your email' 
                className='border border-gray-300 rounded-md py-2 pl-10 pr-3 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>
            </div>



            {/* password-fill-section */}
            <div className="Password-section ">
                <div className='font-semibold text-sm sm:text-base text-black mt-6' >
                    Password
                </div>
                        <div className="relative items-center">
                <MdOutlineMailOutline className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-700 text-xl'/>
                <input type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter your Password' 
                className='border border-gray-300 rounded-md py-2 pl-10 pr-3 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                                {showPassword ? (
                        
                        <LuEyeClosed
                            onClick={() => setShowPassword(false)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-700 text-xl cursor-pointer"
                            />
                        ) : (
                        <GoEye
                            onClick={() => setShowPassword(true)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-700 text-xl cursor-pointer"
                        />
                        )}
                        
                </div>
            </div>

            {/* login-btn */}
            <div className="  login-btn mt-6">
                
                <LoginBtn onClick={handleLogin}
                fullWidth={true} 
                icon={true}
                />
                </div>

                {/* or continue */}
                <div className="or  flex items-center gap-4 my-6">
                    <div className="line flex-1 h-px bg-gray-300"></div>
                    <span className='text-gray-500 text-sm'>Or continue with</span>
                    <div className="line flex-1 h-px bg-gray-300"></div>
                </div>
                {/* social-btn */}
                <div className="social flex gap-4 justify-center px-5 ">
                    <div onClick={handleGoogleLogin}>
                        <Google/>
                    </div>
                    <div onClick={handleGithubLogin}>
                        <Github/>
                        </div>
                    {/* <FaceBook/> */}
                </div>

                <div className="dont text-center mb-5">
                    <p className='text-gray-600 text-sm mt-6'>Don't have an account? <span className='text-blue-500 cursor-pointer'>
                        <Link
                        to="/signup"
                        >
                        Sign Up
                        </Link>
                        </span></p>
                </div>


        </div>










            </div>

    </>
  )
}

export default Login
