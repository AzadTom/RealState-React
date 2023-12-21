/* eslint-disable react/prop-types */
import "../App.css";

const Input = ({id,icon,type,placeholder})=>{


    return(
        <>
        <div className="flex-1 flex gap-2 justify-between  relative">
           
       <div className="absolute px-2  left-0 top-0 flex  items-center w-full h-full md:justify-end">  
       <img src={icon} alt="icon"  width={18} height={18}/> 
       </div>
        <input type={type}  placeholder={placeholder} className="pl-8 md:pl-4 pr-4  py-2 bg-[var(--secondarycolor)] border border-white outline-none placeholder:text-[var(--primarytext)] w-full" id={id}/>
           
        </div>
        </>
    )

}


export default Input;