import React from 'react'
import SearchBar from '../SearchBar/SearchBar';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { useNavigate } from 'react-router-dom';


function HeroSection() {


  return (
    <div className='relative'>

     <img src="/heroImg.png" alt="demo"  className='w-full h-[80vh] bg-center bg-cover object-cover'/>

        <div className='absolute  top-0 left-0 right-0 bottom-0 flex flex-col text-[var(--primarycolor)] justify-between gap-4'>
               
               <div className='flex  gap-16 flex-col-reverse sm:flex-col justify-end'>
               <HeroContent/>
               <SearchBar/>
               </div>
               <Property/>
        </div> 

    </div>
  )
}

export default HeroSection






const HeroContent = ()=>{

    return(
          <div className='flex flex-col justify-center items-center'>
          <h2 className='text-6xl sm:text-8xl font-semibold'>LuxeNust</h2>
            <p className='text-2xl sm:text-3xl'>Find properties nearby</p>
          </div>
    )
}


const Property = ()=>{

  const navigate = useNavigate();

   return(
    <div className='grid grid-cols-2 sm:grid-cols-4 '>
              <div  className=' flex flex-col justify-center items-center gap-2 p-4 bg-[var(--primarytext)] text-[var(--primarycolor)]' onClick={()=> navigate("/searchResult")}><ApartmentIcon/> <span>Buy</span> </div>
              <div  className=' flex flex-col justify-center items-center gap-2 p-4 bg-[var(--secondarytext)] text-[var(--primarycolor)]' onClick={()=> navigate("/searchResult")}><ApartmentIcon/> <span>Rent</span> </div>
              <div  className=' flex flex-col justify-center items-center gap-2 p-4 bg-[var(--primarytext)] text-[var(--primarycolor)]' onClick={()=> navigate("/searchResult")}><ApartmentIcon/> <span>PG</span> </div>
              <div  className=' flex flex-col justify-center items-center gap-2 p-4 bg-[var(--secondarytext)] text-[var(--primarycolor)]' onClick={()=> navigate("/searchResult")}><ApartmentIcon/> <span>Plot</span> </div>
         </div>
   )
}
