import { useEffect } from "react";
import { useState } from "react";


const HeroSection =()=>{


    const[current,setCurrent] = useState(0);




    const images=[
        {
            id:1,
            img:"https://images.pexels.com/photos/5847362/pexels-photo-5847362.jpeg?auto=compress&cs=tinysrgb&w=1200"
        },
        {
            id:2,
            img:"https://images.pexels.com/photos/2326805/pexels-photo-2326805.jpeg?auto=compress&cs=tinysrgb&w=1200"
        },
        {
            id:3,
            img:"https://images.pexels.com/photos/1750306/pexels-photo-1750306.jpeg?auto=compress&cs=tinysrgb&w=1200"
        },
    ];


     useEffect(()=>{


         
        const interval = setInterval(()=>{

            setCurrent(()=>(current>images.length-1?0:current+1));

            console.log(current);

        },3000);

        return clearInterval(interval);

     },[])


    return(
        <>
        <section className="flex w-full h-[80vh]">
          <img src={`${images[current].img}`} alt="heroImg" className="w-full h-full object-cover bg-cover bg-center" />


        </section>
        </>
    )
}


export default HeroSection;