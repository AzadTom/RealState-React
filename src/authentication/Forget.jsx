import React from 'react'

function Forget() {
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
         <form className='flex flex-col gap-4 sm:bg-[#2E2E2E] p-8 rounded '>
                <div>
                <h2 className='text-3xl font-semibold'>Forget</h2>
                <p className='text-sm font-thin'>Lets starts with email</p>
                </div>
                 
              <input type="email"  name='email'  placeholder='Email' required  className='px-4 py-2'/>
              <button type='submit' className='bg-[#2E2E2E] sm:bg-[#1E1E1E] px-4 py-2 rounded'>SEARCH</button>
              
         </form>
      </div>
    </>
  )
}

export default Forget;