import {  useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const BlogCard=({id,img})=>{



    const navigate = useNavigate();



    return(
        <>
        <div className="flex justify-center items-center relative" onClick={()=> navigate("/blogdetailpage")}> 
            <img src={img} alt="blog" />
            <h2 className="absolute text-3xl font-semibold text-white flex flex-col-reverse gap-2 justify-center items-center"><span>Blog</span> <span className="text-6xl">{id}</span></h2>
        </div>
        </>
    )

}


export default BlogCard;