import BlogCard from "./BlogCard";

const Blogs=()=>{



     const blogs=[
        {
            id:1,
            img:"/blog1.png"
        },
        {
            id:2,
            img:"/blog2.png"
        },
        {
            id:3,
            img:"/blog3.png"
        },
        {
            id:4,
            img:"/blog4.png"
        },
        {
            id:5,
            img:"/blog5.png"
        },
        {
            id:6,
            img:"/blog6.png"
        },
       
     ];


    return(
        <>
         <div className="flex  justify-between   mx-8 my-8">
            <h2 className="text-2xl font-semibold">Our Blogs</h2>
            <h1 className="hidden sm:flex  items-center gap-4"><span>Explore All</span> <span><img src="/arrow.svg" alt="arrow" /></span></h1>
        </div>
        <section className="flex flex-col gap-4 justify-center items-center p-4">
         <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4 justify-between   items-center max-w-[1000px]">
         {
            blogs.map((item)=>
            (
                <BlogCard {...item} key={item.id}/>
            ))
         }
         </div>

        </section>
        </>
    )

}


export default Blogs;