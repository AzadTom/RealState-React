import React from 'react'
import { useNavigate } from 'react-router-dom';

function SignIn() {

  const navigate = useNavigate();

  return (
    <>
      <div className='flex justify-center items-center h-screen'>
         <form className='flex flex-col gap-4 bg-[#2E2E2E] p-8 rounded '>
                <div>
                <h2 className='text-3xl font-semibold'>SIGN IN</h2>
                <p className='text-sm font-thin'>Lets connect account fast</p>
                </div>
                 
              <input type="email"  name='email'  placeholder='Email' required  className='px-4 py-2'/>
              <input type="text" name='password' placeholder='Password'  className='px-4 py-2'/>
              <h2 className='text-sm cursor-pointer' onClick={()=> navigate("/forget")}>Forget Password?</h2>
              <button type='submit' className='bg-[#1E1E1E] px-4 py-2 rounded'>SIGNUP</button>
              <p className='text-center cursor-pointer' onClick={()=> navigate("/signup")}>Create an account?Sign Up</p>
              
         </form>
      </div>
    </>
  )
}

export default SignIn;