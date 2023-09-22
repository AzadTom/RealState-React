import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import heroimg from '../assets/hero.png';

function HeroSection() {
  const navigate = useNavigate();
  return (
    <>
    <header className="">
    <Header/>
    </header>
    <div className="flex  flex-col-reverse sm:flex-row  sm:justify-between items-center bg-[#1E1E1E]  ">
      {/* Hero content */}
      <div className="px-10 space-y-5 lg:py-6 p-4 ">
        <h1 className="text-3xl sm:text-6xl md:text-7xl max-w-xl font-serif w-11/12 sm:w-9/12">
          <span className="underline decoration-white decoration-2">
            ExpenseTracker
          </span>{" "}
          is a place to write, read and connect.
        </h1>
        <h2 className="w-9/12 font-normal">
          It's easy and free to post your thinking on any topic and connect with
          millions of readers.
        </h2>
        <button className=" bg-[#2E2E2E] px-4 py-2 rounded-full font-medium active:scale-90 transition duration-100" onClick={()=>navigate("/home")}>
          Get Started
        </button>
      </div>
      {/* Hero image */}
      <img
        className=" sm:inline-flex"
        src="https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
    </div>
    </>
  );
}

export default HeroSection;
