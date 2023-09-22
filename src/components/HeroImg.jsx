import React from 'react'

function HeroImg() {
  return (
    <>
    <div className='flex flex-col justify-center items-center'>
         <div className='flex gap-2'>
            <div className='bg-red-600  p-8 rounded-[50%] w-[120px] h-[120px] flex justify-center items-center'>Money</div>
            <div className='bg-blue-600  p-8 rounded-[50%] w-[120px] h-[120px] flex justify-center items-center'>Expense</div>
            <div className='bg-pink-600  p-8 rounded-[50%] w-[120px] h-[120px] flex justify-center items-center'>Finance</div>
         </div>
         <div className='flex gap-2'>
            <div className='bg-yellow-600  p-8 rounded-[50%] w-[120px] h-[120px] flex justify-center items-center'>Tax</div>
            <div className='bg-lime-600  p-8 rounded-[50%] w-[120px] h-[120px] flex justify-center items-center'>Gst</div>
         </div>
         <div className='flex gap-2'>
            <div className='bg-orange-600  p-8 rounded-[50%] w-[120px] h-[120px] flex justify-center items-center'>MoneyControl</div>
         </div>
    </div>
    </>
  )
}

export default HeroImg