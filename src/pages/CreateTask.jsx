import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import { newTask } from "../services/taskservice.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function CreateTask() {


    const navigate = useNavigate( );

    const [selectedOption, setSelectedOption] = useState("");

    const [formdetails,setFormDetail] =  useState({
        title: "",
        description:"",
        type:"",
        amount:""
    })

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setFormDetail({...formdetails , type:event.target.value})

  };


  const handleForm = async(e)=>{

     e.preventDefault();
     

     try {
     
     const response  = await newTask(formdetails.title, formdetails.description, formdetails.type, formdetails.amount);
 
     console.log(response);
 
     if(response.status ===200 || response.status ===201){
         
      toast.success("Task added successfully!", {
        style: {
          border: "1px solid #1E1E1E",
          padding: "16px",
          color: "#fff",
          background: "#1E1E1E",
        },
        iconTheme: {
          primary: "#FFF",
          secondary: "#1E1E1E",
        },
      });

      navigate("/home");
 
     }
     else
     {
 
      toast.error("Failed!", {
        style: {
          border: "1px solid #1E1E1E",
          padding: "16px",
          color: "#fff",
          background: "#1E1E1E",
        },
        iconTheme: {
          primary: "#FFF",
          secondary: "#1E1E1E",
        },
      });
      navigate("/signup");
 
     }
      
     } catch (error) {


      toast.error(error, {
        style: {
          border: "1px solid #1E1E1E",
          padding: "16px",
          color: "#fff",
          background: "#1E1E1E",
        },
        iconTheme: {
          primary: "#FFF",
          secondary: "#1E1E1E",
        },
      });
      
     }


  }


  return (
  <>
      <Header/>
    <div className="text-white flex justify-center items-center h-[80vh]">
      <form className="flex flex-col gap-2 sm:gap-4 bg-[#2E2E2E] p-4 sm:p-6 rounded"onSubmit={(e)=> handleForm(e)}>
        <h2 className="text-2xl text-center font-semibold">Create Task</h2>
        <input type="text" placeholder="Title"  value={formdetails.title} onChange={ (e)=> setFormDetail({...formdetails , title:e.target.value})} required/>
        <input type="text" placeholder="Description" value={formdetails.description} onChange={ (e)=> setFormDetail({...formdetails , description:e.target.value})}  required/>
        <select
          className="w-full p-2 border rounded-md bg-[#1E1E1E] border-[#2E2E2E] outline-none"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="">Select...</option>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
        </select>

        <input type="text" placeholder="Amount"  value={formdetails.amount} onChange={ (e)=> setFormDetail({...formdetails , amount:e.target.value})} required/>

        <button className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded shadow-md" type="submit">
          Create
        </button>
      </form>
    </div>
  </>
  );
}

export default CreateTask;
