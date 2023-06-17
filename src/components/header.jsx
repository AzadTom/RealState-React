import React from 'react'
import { Link } from 'react-router-dom'

function Header({name}) {
  return (
   
           
           <div className='flex  justify-center items-center gap-2 flex-row-reverse bg-slate-950  text-slate-100  text-center p-2'>
            
             <h1 className='font-semibold text-xl'>{name}</h1>
             <Link to="/">
             <img src="https://tse3.mm.bing.net/th?id=OIP.g3BSsq6Zu1yffJV0sulpqgHaHa&pid=Api&P=0&h=180" alt="logo" className='rounded-[50%] w-[42px] h-[42px]' />
             </Link>
           </div>
   
  )
}

export default Header