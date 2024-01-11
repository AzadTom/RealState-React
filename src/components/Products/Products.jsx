import React from 'react'
import Product from './Product'

function Products({content}) {


    const elements = Array.from({length:20},(_,index)=>(<Product key={index+1}/>))
    
    
    return(
        <>
        <section className='flex flex-col justify-center items-center' >
             <div className='flex justify-between items-center w-full p-2'>
                <h1 className='font-semibold text-2xl'>{content}</h1>
                <h1 className='text-[#606060] hidden sm:block'>See all</h1>
             </div>
            <div className='flex gap-4 overflow-x-auto  w-full p-2'>{elements}</div>
        </section>
        </>
    )

};

export default Products