import React from 'react'
import { useNavigate } from 'react-router-dom';

function Product() {

    const image = "https://cdn.staticmb.com/magicservicestatic/images/mb-home-web/collection/buy/webp/budget-homes.webp";

    const navigate = useNavigate();

    

  return (
    <div className=' border border-[#E0E0E0] flex-shrink-0 w-[300px]'onClick={()=> navigate("/productdetailpage")}>
        <div>
            <img src={image} alt="demoImg"  className=''/>
        </div>
        <div className='p-4 text-[#303030] flex flex-col gap-1'>
            <span className=''>1 BHK Flat</span>
            <h2 className='font-semibold'>₹ 36 lac</h2>
            <p className='text-[#606060]'>Sector 44,Gurugram</p>
            <button className='bg-[var(--primarytext)] px-4 py-2 text-white '>Ready to Move</button>
        </div>
    </div>
  )
}

export default Product