import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import toast from "react-hot-toast";
import { deleteTask } from "../services/taskservice";
import { useNavigate } from "react-router-dom";


const  TaskItem =  React.memo(({ icon ,item,}) =>{


    const navigate = useNavigate( );


    return (
       <>
      <div className="bg-[#2E2E2E]  flex  items-center   gap-2 p-2  rounded-[1.5rem]">
        {/* Icon */}
        <div className="bg-[#1E1E1E] p-3 sm:p-4 rounded-[50%]">
          <img src={icon} alt="icon" />
        </div>
        {/* content */}
        <div className="w-full">
          <h2 className="text-xl sm:text-3xl font-semibold">{item.title}</h2>
          <p>{item.type}</p>
          <p className="font-thin">{item.description}</p>
          <p>{item.amount}</p>
        </div>
        {/* Icon */}
        <div
          className="flex justify-end p-4 cursor-pointer text-white"
          onClick={( ) =>{

                  try {
                    

                    const response  =deleteTask(item._id)

                    if(response)
                    {
                     toast.success("Deleted Sucessfully!", {
                       style: {
                         border: "1px solid #1E1E1E",
                         padding: "16px",
                         color: "#fff",
                         background: "#1E1E1E"
                       },
                       iconTheme: {
                         primary: "#FFF",
                         secondary: "#1E1E1E",
                       },
                     })
                    }
                    else
                    {
                      navigate("/signup");
                    }


                  } catch (error) {
                    
                    navigate("/signup");
                  }

           
          }
        }
        >
          <HighlightOffIcon />
        </div>
      </div>
    </>
    )


}) 

export default TaskItem;
