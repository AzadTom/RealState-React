import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../components/Header'

function Carousel({ images }) {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((previndex) => (previndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="flex flex-col  h-screen  items-center justify-center relative  sm:flex-row ">
      <header className="absolute top-0 left-0 z-50">
        <Header/>
      </header>
      <div   className="flex-1 px-6 flex flex-col gap-2 justify-center  sm:items-start relative"  >
      <img
          src={` ${images[currentIndex]}`}
          alt="hero-img"
          className="sm:hidden w-full h-screen  object-cover bg-center bg-cover absolute  top-0 bottom-0 left-0 right-0"
        />
        <h1 className="text-2xl sm:text-3xl font-semibold z-50">Mr.Mahesh Sharma</h1>
        <p className="font-extralight  text-[16px]  z-50">
           Hello Mahesh Sharma from Gurgaon, Haryana, I have over a decade of
          experience specializing in various woodworking projects, and I'm
          passionate about creating stunning and functional woodwork that
          exceeds your expectations. Whether you have a specific project in mind
          or need assistance brainstorming ideas, I'm here to help bring your
          vision to life.
        </p>
        <div className="flex gap-4 my-2 z-50">
            <button className="px-4 py-2 rounded bg-white text-black">Contact Us</button>
            <button className="border border-white px-4 py-2 rounded text-white">About Me</button>
        </div>
        <div className=" sm:hidden h-full linear-up absolute w-full  top-0 left-0 z-10 right-0"></div>
        <div className=" sm:hidden h-full linear-up absolute w-full top-0 left-0 z-10 right-0"></div>
      

        
      </div>



      <div className="flex-1 relative hidden sm:block">
        <img
          src={` ${images[currentIndex]}`}
          alt="hero-img"
          className="w-full sm:h-screen  object-cover bg-center bg-cover "
        />
        <div className="absolute z-50 bottom-4 left-1/2 flex gap-2 ">
          <span
            className={
              images[currentIndex] == images[0]
                ? "bg-white rounded-[50px] w-3 h-3"
                : " border-white border-2 rounded-[50px] w-3 h-3"
            }
          ></span>
          <span
            className={
              images[currentIndex] == images[1]
                ? "bg-white rounded-[50px] w-3 h-3"
                : " border-white border-2 rounded-[50px] w-3 h-3"
            }
          ></span>
          <span
            className={
              images[currentIndex] == images[2]
                ? "bg-white rounded-[50px] w-3 h-3"
                : " border-white border-2 rounded-[50px] w-3 h-3"
            }
          ></span>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
