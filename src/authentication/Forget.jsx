import React, { useState } from 'react'
import { useAuth } from '../contexts/authcontext';
import { useNavigate } from 'react-router-dom';

function Forget() {



  const navigate = useNavigate();

  const [email,setemail] = useState("");

  const {forgethandler} = useAuth();


  const forgetformhandler = async(event)=> {

      event.preventDefault();
      await forgethandler(email)


  }


  return (
    <>
      <div className='flex justify-center items-center h-screen'>
         <form className='flex flex-col gap-4 sm:bg-[#2E2E2E] p-2 sm:p-8 rounded '>
                <div>
                <h2 className='text-3xl font-semibold'>Forget</h2>
                <p className='text-sm font-thin'>Lets starts with email</p>
                </div>
                 
              <input type="email"  name='email'  placeholder='Email' required  className='px-4 py-2' value={email} onChange={ (e)=> setemail(e.target.value)}/>
              <button  className='bg-[#2E2E2E] sm:bg-[#1E1E1E] px-4 py-2 rounded' onClick={(e)=> forgetformhandler(e)}>SEARCH</button>
              
         </form>
      </div>
    </>
  )
}

export default Forget;