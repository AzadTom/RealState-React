import axios from "axios";
import { BASE_URL } from "../utils/constant.js";

 const signupservice = async (name, email, password) =>
  await axios.post(`${BASE_URL}/api/v1/user/register`, {
    name ,
    email,
    password
  },{
    headers:{
      "Content-Type":"application/json",

    },
    withCredentials:true
  });


  const loginservice = async(email,password)=>
  await axios.post(`${BASE_URL}/api/v1/user/login`, {
    email,
    password
  },{
    headers:{
      "Content-Type":"application/json",

    },
    withCredentials:true
  });


  const logoutservice =async( )=>
   await axios.get(`${BASE_URL}/api/v1/user/logout`,{
    headers:{
      "Content-Type":"application/json",

    },
    withCredentials:true
  });

    

    const forgetPassword = async( email)=>
    await axios.post(`${BASE_URL}/api/v1/password/`,{email},{
      headers:{
        "Content-Type":"application/json",
  
      },
      withCredentials:true
    });


    const changePassword = async(userId,tokon,password)=>
     await axios.post(`${BASE_URL}/api/v1/password/password-reset`,{
      userId,
      tokon,
      password
     },{
      headers:{
        "Content-Type":"application/json",
  
      },
      withCredentials:true
    })

    export {signupservice,loginservice,logoutservice,forgetPassword,changePassword}