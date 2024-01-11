import React from 'react'

function BlogDeatailPage() {


  return (
    <>
    <BlogContent/>
    <BlogContent/>
    <BlogContent/>
    <BlogContent/>
    </>
  )
}

export default BlogDeatailPage;


const BlogContent = ()=>{


  const image = "https://cdn.staticmb.com/magicservicestatic/images/mb-home-web/collection/buy/webp/budget-homes.webp";


  return(
    <div className=' border border-[#E0E0E0] flex flex-col sm:flex-row sm:justify-between'>
        <div className='flex-1'>
            <img src={image} alt="demoImg"  className=''/>
        </div>
        <div className='p-4 text-[#303030] flex flex-col gap-1 flex-1 justify-center items-start'>
            <span className=''>lorem</span>
            <h2 className='font-semibold'>Lorem ipsum dolor sit amet.</h2>
            <p className='text-[#606060]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, minus, vero neque perferendis ut eos eveniet sint impedit voluptates fuga, praesentium minima animi ab aspernatur! Consequuntur asperiores culpa accusantium numquam ratione, excepturi molestiae!</p>
            <button className='px-4 py-2 bg-[var(--primarytext)] text-white'>See more</button>
        </div>
    </div>
  )
} 