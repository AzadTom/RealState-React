import React, { useEffect, useState } from 'react'

function Slider({images}) {

    const[currentIndex,setCurrentIndex] = useState(0);
    useEffect(()=>{

        const interval = setInterval(() => {

            setCurrentIndex((previndex)=> (previndex+1) % images.length);

            
        }, 3000);

        return ()=> clearInterval(interval);

    },[images.length]);




    const goToPreviousSlide =()=>{

        setCurrentIndex((previndex)=> (previndex-1 +images.length)% images.length);
    }
    const goToNextSlide =()=>{

        setCurrentIndex((previndex)=> (previndex+1 +images.length)% images.length);
    }


  return (
    <div className='w-full h-[50vh] md:h-[80vh] relative  text-white'>
        <img src={images[currentIndex]}  alt="slider-img" className='w-full h-full object-contain' />
            <div onClick={goToPreviousSlide} className=' cursor-pointer bg-slate-300 absolute left-0 top-1/2  rounded px-2 py-4 flex justify-center items-center '> <span className='text-4xl'>&#8249;</span></div>
            <div onClick={goToNextSlide} className=' cursor-pointer bg-slate-300   absolute right-0 top-1/2  rounded px-2 py-4  flex justify-center items-center'><span className='text-4xl'>&#8250;</span></div>
    </div>
  )
}

export default Slider