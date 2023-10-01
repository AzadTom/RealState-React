import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Profile() {


   const navigae = useNavigate();

    const { state , logouthandler} = useAuth( );

    const {currentUser} = state;
    
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="w-[3rem] h-[3rem] rounded-[50%] bg-white text-black font-semibold flex justify-center items-center">
            {currentUser.name.charAt(0)}
          </div>
          <span>{currentUser.name}</span>
          <span>{currentUser.email}</span>
          <div className="flex gap-4 justify-between">
            <button className="px-4 py-2 rounded bg-slate-800" onClick={()=> navigae("/home")}>Back</button>
            <button className="px-4 py-2 rounded bg-slate-800" onClick={()=> logouthandler( )}>Logout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
