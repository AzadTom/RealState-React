import React, { useState } from 'react'
import { LocationCity, LocationSearching } from '@mui/icons-material';
import { Home } from '@mui/icons-material';
import { Money } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import SearchInput from './SearchInput';
import ListItem from './ListItem';

function SearchBar() {



    const navigate = useNavigate();

    const location = ["Haryana","Mumbai","Delhi","Chandigarh"];



    

    const inputs = [
        {
            icon: <LocationCity/>,
            text:"Enter location",
            list: ["Mumbai","Kolkata","Saga","Gujrat","Mumbai"]

        },
        {
            icon:<Home/>,
            text:"Property",
            list: ["rent a property","buy a property","Pg"]
        },
        {

            icon:<Money/>,
            text:"Budget",
            list:["8000","12000","20000","30000"]

        }
    ]


  return (
    <section className='flex justify-center items-center '>
        <div className='max-w-[1000px] w-full flex flex-col gap-4 bg-white shadow-md  px-4 py-2'>
        <div className='grid grid-cols-1   sm:grid-cols-2 md:grid-cols-4 gap-4  '>
            {inputs.map((item)=>{

                return ( <SearchInput item={item}/> )

            })} 

                <div className='relative text-black sm:hidden'>
                     
                     <label htmlFor="location" className='absolute top-0 left-0 right-0 bottom-0 flex items-center px-4 border border-[var(--secondarytext)]'><LocationSearching/></label>
                     <input type="text" placeholder="Location"  className='pl-12 py-2  w-full' id="location" />
                   
                     
               </div>

            <button className='px-4 py-2 bg-[var(--primarytext)] text-[var(--primarycolor)] hidden sm:block' onClick={()=> navigate("/searchResult")}>Search</button>
        </div>
        <div className='flex justify-between gap-2 overflow-scroll w-full'>
            {location.map((item)=>( <button className='flex-1 px-4 py-2 bg-[var(--primarytext)]'onClick={()=> navigate("/searchResult")}>{item}</button> ))}
        </div>
    </div>
    </section>
  )
}

export default SearchBar