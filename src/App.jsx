import React from "react";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import SignUp from "./authentication/SignUp";
import SignIn from "./authentication/SignIn";
import Forget from "./authentication/Forget";
import HeroSection from "./components/HeroSection";
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <>
    <Toaster position="bottom-center" reverseOrder={false}/>
    <Routes>
        <Route element ={ <HeroSection/>} path="/"/>
        <Route element={<SignUp/>} path="/signup"/>
        <Route element={<SignIn/>} path="/signin"/>
        <Route element={<Forget/>} path="/forget"/>
        <Route element={<Home/>} path="/home"/>
    </Routes>
    </>
  );
}

export default App;
