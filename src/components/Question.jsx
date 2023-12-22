import { useState } from "react";


const Question = ({title}) => {

    const[status,setStatus] = useState(false);

    return (
        <>
            <div className="flex flex-col ">
                <div className="flex justify-between" onClick={() => setStatus(!status)}>
                <div className="flex gap-2 md:items-center cursor-pointer" ><span><img src="/dot.svg" alt="dot" /></span> <h2>{title}</h2></div>
                 <span className="text-[var(--secondarytext)] pl-4">+</span>
                </div>
                <p className={status == true ? "text-sm text-[var(--secondarytext)]  w-full pl-4" : "hidden"}>Yes , We do we are connecting to our country leading bank such as access bank ,hdfc bank etc...</p>
            </div>
        </>
    )

}


export default Question;
