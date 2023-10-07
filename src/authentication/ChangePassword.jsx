import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext';
import { useParams } from 'react-router-dom';

function ChangePassword() {

    const {id,tokon} = useParams();


    console.log(id,tokon);


  const [passwordetails,setpassword] = useState({
    userId: id,
    tokon:tokon,
    password:""
  });

  const {changepasswordhandler} = useAuth();


  const changeformPassword = async(event)=> {

      event.preventDefault();
      await changepasswordhandler(passwordetails.userId,passwordetails.tokon,passwordetails.password);


  }


  return (
    <>
      <div className='flex justify-center items-center h-screen'>
         <form className='flex flex-col gap-4 sm:bg-[#2E2E2E] p-2 sm:p-8 rounded '>
                <div>
                <h2 className='text-2xl font-semibold'>Change pssword</h2>
                </div>
                 
              <input type="text"  name='password'  placeholder='Password' required  className='px-4 py-2' value={passwordetails.password} onChange={ (e)=> setpassword({...passwordetails,password:e.target.value})}/>
              <button  className='bg-[#2E2E2E] sm:bg-[#1E1E1E] px-4 py-2 rounded' onClick={(e)=> changeformPassword(e)}>CHANGE</button>
              
         </form>
      </div>
    </>
  )
}

export default ChangePassword;