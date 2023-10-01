import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function SignIn() {

  const navigate = useNavigate();

  const  { loginhandler } = useAuth( );


  const [userDetails,setUserDetails] = useState({
    email:"",
    password:""
  });


  const loginformhandler = async(event)=>{

     event.preventDefault();
   
      await loginhandler(userDetails)
}

  return (
    <>
      <div className='flex justify-center items-center h-screen'>
         <form className='flex flex-col gap-4 sm:bg-[#2E2E2E] p-2 sm:p-8 rounded '>
                <div>
                <h2 className='text-3xl font-semibold'>SIGN IN</h2>
                <p className='text-sm font-thin'>Lets connect account fast</p>
                </div>
                 
              <input type="email"  name='email'  placeholder='Email' required  className='px-4 py-2' value={userDetails.email} onChange={(event)=> setUserDetails({...userDetails,email:event.target.value})}/>
              <input type="text" name='password' placeholder='Password' required className='px-4 py-2' value={userDetails.password} onChange={(event)=> setUserDetails({...userDetails,password:event.target.value})}/>
              <h2 className='text-sm cursor-pointer' onClick={()=> navigate("/forget")}>Forget Password?</h2>
              <button className='bg-[#2E2E2E] sm:bg-[#1E1E1E] px-4 py-2 rounded' onClick={(event)=> loginformhandler(event)}>SIGNIN</button>
              <p className='text-center cursor-pointer' onClick={()=> navigate("/signup")}>Create an account?Sign Up</p>
              
         </form>
      </div>
    </>
  )
}

export default SignIn;