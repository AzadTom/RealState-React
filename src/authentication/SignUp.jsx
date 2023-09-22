import React from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {

  const navigate = useNavigate();
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
         <form className='flex flex-col gap-4 bg-[#2E2E2E] p-8 rounded '>
                <div>
                <h2 className='text-3xl font-semibold'>SIGN UP</h2>
                <p className='text-sm font-thin'>Lets create account fast</p>
                </div>
                 
              <input type="text"  name='name'  placeholder='Username' required className='px-4 py-2' />
              <input type="email"  name='email'  placeholder='Email' required  className='px-4 py-2'/>
              <input type="text" name='password' placeholder='Password'  className='px-4 py-2'/>
              <button type='submit' className='bg-[#1E1E1E] px-4 py-2 rounded'>SIGNUP</button>
              <p className='text-center cursor-pointer' onClick={()=> navigate("/signin")}>Already register?<span>Sign In</span></p>
              
         </form>
      </div>
    </>
  )
}

export default SignUp