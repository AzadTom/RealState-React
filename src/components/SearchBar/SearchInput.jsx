import React, { useState } from 'react'
import ListItem from './ListItem';

function SearchInput({item}) {

    const [option,Setoption] = useState(false);
    const [input,Setinput] = useState("");

    const showOption  = ()=>{

        Setoption((prev)=>(!prev));

    }

    const setValue = (item)=> {

       Setinput(item);
    }

    const closeOption = ()=>{

       Setoption(false);
    }


  return (
    <div className='relative text-black hidden sm:block' >
                     
    <label htmlFor={item.text} className='absolute top-0 left-0 right-0 bottom-0 flex items-center px-4 border border-[var(--secondarytext)]'>{item.icon}</label>
    <input type="text" placeholder={item.text}  className='pl-12 py-2  w-full' id={item.text} onClick={showOption}  value={input}/>
   
    {option && <div className='absolute top-8 left-0 w-full z-10  bg-white shadow-md' onBlur={closeOption}>
      <ListItem list={item.list}  setValue={(item)=> setValue(item)} closeOption={closeOption}/>
    </div>}
    
   </div> 
  )
}

export default SearchInput