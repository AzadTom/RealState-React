import React from 'react'

function ProductDeatailPage() {

    const image = "https://cdn.staticmb.com/magicservicestatic/images/mb-home-web/collection/buy/webp/budget-homes.webp";

  return (
    <div className=' border border-[#E0E0E0] flex flex-col sm:flex-row sm:justify-between'>
        <div className='flex-1'>
            <img src={image} alt="demoImg"  className=''/>
        </div>
        <div className='p-4 text-[#303030] flex flex-col gap-1 flex-1 justify-center items-start'>
            <span className=''>1 BHK Flat</span>
            <h2 className='font-semibold'>₹ 36 lac</h2>
            <p className='text-[#606060]'>Sector 44,Gurugram</p>
            <button className='bg-[var(--primarytext)] px-4 py-2 text-white '>Ready to Move</button>
        </div>
    </div>
  )
}

export default ProductDeatailPage;