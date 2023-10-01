import React from "react";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import SignUp from "./authentication/SignUp";
import SignIn from "./authentication/SignIn";
import Forget from "./authentication/Forget";
import ChangePassword from "./authentication/ChangePassword";
import Success from "./authentication/Success";
import HeroSection from "./components/HeroSection";
import {Routes,Route} from 'react-router-dom'
import Profile from "./pages/Profile";


function App() {
  return (
    <>
    <Toaster position="bottom-center" reverseOrder={false}/>
    <Routes>
        <Route element ={ <HeroSection/>} path="/"/>
        <Route element={<SignUp/>} path="/signup"/>
        <Route element={<SignIn/>} path="/signin"/>
        <Route element={<Forget/>} path="/forget"/>
        <Route element={<ChangePassword/>} path="/change/:id/:tokon"/>
        <Route element={<Success/>} path="/success/:message"/>
        <Route element={<Home/>} path="/home"/>
        <Route element={<Profile/>} path="/profile"/>
    </Routes>
    </>
  );
}

export default App;
