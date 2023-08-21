import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/pic.jpg"

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Images url to Image"
      desc2="Memories  will come back"
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login
