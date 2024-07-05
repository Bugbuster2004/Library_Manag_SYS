import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import eye from "../assets/images/eye.svg"
import eyeSlash from "../assets/images/eye-slash.svg"
import user from "../assets/images/person.svg"
import env from "../assets/images/envelope.svg"


import { useNavigate } from "react-router-dom";
function Register() {
      const[name , setname] = useState("");
      const[email , setemail] = useState("");
      const[password , setpassword] = useState("");
      const[visible, setvisible] =useState(false);
const navigate  = useNavigate();
const handleIconClick = () =>{
    setvisible(!visible);
}

      const handleSubmit = async (event) => {
        event.preventDefault();
        if(!name ||!email ||!password){
            alert("Fields Empty")
            return;
        }
    
       try{
        const response = await axios.post("http://localhost:3000/register",{
            name,email,password
        })
        if (response.status == 201) {
            console.log((response))
            alert("Registered Successfully!");
            navigate("/login")
    
    
          } else {
            alert( "Registration failed.");
          }

       }catch(error){
        alert(error)

       }

    }



    return (
        <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
                  
              </h1>
              <form class="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
              <div className=" relative">
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                      <input type="text" onChange={(e)=>{setname(e.target.value)}} name="name" id="name" placeholder="Enter you name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                      <img className=" absolute right-4 top-10 cursor-pointer size-5" src={user} alt="" />
                  </div>
                  <div className=" relative">
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" onChange={(e)=>{setemail(e.target.value)}} name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                      <img className=" absolute right-4 top-10 cursor-pointer size-5" src={env} alt="" />
                  </div>
                  <div className=" relative">
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password </label>
                      <input type={visible ? "text" : "password"} onChange={(e)=>{setpassword(e.target.value)}} name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                      <img className=" absolute right-4 top-10 cursor-pointer size-5" src={visible ? eyeSlash : eye}  alt="" onClick={handleIconClick} />
                  </div>
                  
                  
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button  to="/login" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <Link to="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
      );
}

export default Register;