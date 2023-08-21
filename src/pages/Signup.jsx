import React from 'react'
import signupImg from "../assets/pic2.jpg"
import Template from '../components/Template';

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
        title="Signup Here"
        desc1="A good life is a collection of memories"
        image={signupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
        />

  )
}

export default Signup;