
// eslint-disable-next-line react/prop-types
const BlogCard=({id,img})=>{



    return(
        <>
        <div className="flex justify-center items-center relative"> 
            <img src={img} alt="blog" />
            <h2 className="absolute text-8xl font-semibold">{id}</h2>
        </div>
        </>
    )

}


export default BlogCard;