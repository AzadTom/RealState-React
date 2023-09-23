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
  }).then((res)=> console.log(res)).catch((err)=> console.log(err))


  const loginservice = async(email,password)=>
  await axios.post(`${BASE_URL}/api/v1/user/login`, {
    email,
    password
  },{
    headers:{
      "Content-Type":"application/json",

    },
    withCredentials:true
  }).then((res)=> console.log(res)).catch((err)=> console.log(err))


  const logoutservice =async( )=>
   await axios.get(`${BASE_URL}/api/v1/user/logout`,{
    headers:{
      "Content-Type":"application/json",

    },
    withCredentials:true
  }).then((res)=> console.log(res)).catch((err)=> console.log(err))

    const currentProfile = async( )=>
    await axios.get(`${BASE_URL}/api/v1/user/profile`,{
      headers:{
        "Content-Type":"application/json",
  
      },
      withCredentials:true
    }).then((res)=> console.log(res)).catch((err)=> console.log(err))

    const forgetPassword = async( email)=>
    await axios.post(`${BASE_URL}/api/v1/password/`,{email},{
      headers:{
        "Content-Type":"application/json",
  
      },
      withCredentials:true
    }).then((res)=> console.log(res)).catch((err)=> console.log(err))

    export {signupservice,loginservice,logoutservice,currentProfile,forgetPassword}