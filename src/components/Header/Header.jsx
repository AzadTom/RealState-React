import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {

  const navigate =  useNavigate();

  return (
    
        <header className='sticky top-0 z-10 bg-[var(--primarycolor)] px-4 py-2 flex justify-between items-center'>
            <h1 className='text-3xl font-semibold cursor-pointer'onClick={()=> navigate("/")}>LuxeNust</h1>
             <button className='bg-[var(--primarytext)] px-4 py-2  text-[var(--primarycolor)] text-xs sm:text-sm'>post property</button>
        </header>
    
  )
}

export default Header