import React from 'react'
import mug from '../assets/mug1.jpeg';
import t from '../assets/t1.jpeg';
import wed from '../assets/wed1.jpeg';
import pillow from '../assets/pil1.jpeg';
import cover from '../assets/cover.jpeg';
import idcard from '../assets/id1.jpeg';
import frame from '../assets/frame1.jpeg';

import { Link } from 'react-router-dom';


function Category() {
  return (
    <div className='mx-2 my-6 text-center'>
         <div className='flex  justify-center items-center gap-2 flex-row-reverse  text-center p-2'>
            <h1 className='font-semibold text-xl'>Explore  All Printing Categories</h1>
            <img src="https://tse3.mm.bing.net/th?id=OIP.g3BSsq6Zu1yffJV0sulpqgHaHa&pid=Api&P=0&h=180" alt="logo" className='rounded-[50%] w-[42px] h-[42px]' />
           </div>
       
           <div className=' flex item-center  justify-center gap-8 flex-wrap'>
           <Link to="/printedmug">
           <div className='w-[300px] h-full m-2 rounded bg-slate-950 ' >
            <img src={mug}  alt="Mug" className='w-[300px] h-[300px] object-cover' />
            <h2 className='font-extralight text-xl py-2 text-white'>Printed Mug </h2>
            </div>
           </Link>

           <Link to="/idcard">
           <div className='w-[300px] h-full m-2 rounded bg-slate-950 ' >
            <img src={idcard}  alt="Idcard" className='w-[300px] h-[300px] object-cover' />
            <h2 className='font-extralight text-xl py-2 text-white'>ID Card Printing</h2>
            </div>
           </Link>

           <Link to="/tshirt">
           <div className='w-[300px] h-full m-2 rounded bg-slate-950 ' >
            <img src={t}  alt="t-shirt"  className='w-[300px] h-[300px] object-cover'/>
            <h2 className='font-extralight text-xl py-2 text-white'>T-shirt Printing</h2>
            </div>
           </Link>
           <Link to="/frame">
           <div className='w-[300px] h-full m-2 rounded bg-slate-950 ' >
            <img src={frame}  alt="Frame"  className='w-[300px] h-[300px] object-cover'/>
            <h2 className='font-extralight text-xl py-2 text-white'>Frame </h2>
            </div>
           </Link>
           <Link to="/wedding">
           <div className='w-[300px] h-full m-2 rounded bg-slate-950 ' >
            <img src={wed}  alt="Wedding"  className='w-[300px] h-[300px] object-cover'/>
            <h2 className='font-extralight text-xl py-2 text-white'>Wedding Card Printing </h2>
            </div>
           </Link>
           <Link to="/pillow">
           <div className='w-[300px] h-full m-2 rounded bg-slate-950 ' >
            <img src={pillow}  alt="Pillow" className='w-[300px] h-[300px] object-cover' />
            <h2 className='font-extralight text-xl py-2 text-white'>Pillow Printing</h2>
            </div>
           </Link>
           <Link to="/cover">
           <div className='w-[300px] h-full m-2 rounded bg-slate-950 ' >
            <img src={cover}  alt="cover"  className='w-[300px] h-[300px] object-cover'/>
            <h2 className='font-extralight text-xl py-2 text-white'>Mobile Cover Printing</h2>
            </div>
           </Link>
            </div>
      

       

        

    </div>
    
  )
}

export default Category