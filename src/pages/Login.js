import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/login.png"

const Login = ({setIsLoggedIn , isLoggedIn}) => {
  return (
    <div className='w-screen h-screen'>
      <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
      isLoggedIn = {isLoggedIn}
    />
    </div>
  )
}

export default Login
