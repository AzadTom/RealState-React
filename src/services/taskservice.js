import axios from 'axios';
import { BASE_URL } from "../utils/constant.js";

export const newTask = async (title, description, type,amount) =>
await axios.post(`${BASE_URL}/api/v1/task/new`, {
  title ,
  description,
  type,
  amount
},{
  headers:{
    "Content-Type":"application/json",
    },
  withCredentials:true
});


export const getTasks = async( )=>
 await axios.get(`${BASE_URL}/api/v1/task/mytasks`,{
    headers:{
      "Content-Type":"application/json",
    },
    withCredentials:true
  });

  export const deleteTask= async (id)=>
  await axios.delete(`${BASE_URL}/api/v1/task/mytask/${id}`,{
    headers:{
      "Content-Type":"application/json",
    },
    withCredentials:true
  });


  


