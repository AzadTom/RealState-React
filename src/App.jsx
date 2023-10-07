import React, { Suspense, lazy } from "react";
import {Routes,Route} from 'react-router-dom'
import { Toaster } from "react-hot-toast";
const  Home =  lazy(()=> import("./pages/Home")); 
const  SignUp = lazy(()=> import("./authentication/SignUp"));
const  SignIn =  lazy(()=> import("./authentication/SignIn"));
const  Forget = lazy(()=> import("./authentication/Forget")); 
const ChangePassword = lazy(()=> import( "./authentication/ChangePassword")); 
const  Success  = lazy(()=> import("./authentication/Success")); 
const  HeroSection = lazy(()=> import("./components/HeroSection"));  
const  Profile =  lazy(()=> import("./pages/Profile")) ;
const CreateTask  = lazy(()=> import("./pages/CreateTask"));
const Loader  = lazy(()=> import("./components/Loader"));


function App() {
  return (
    <>
    <Toaster position="bottom-center" reverseOrder={false}/>
    <Routes>
        <Route element ={ <Suspense fallback={<Loader/>}> <HeroSection /></Suspense>} path="/"/>
        <Route element={<Suspense fallback={<Loader/>}><SignUp/></Suspense>} path="/signup"/>
        <Route element={<Suspense fallback={<Loader/>}> <SignIn/></Suspense>} path="/signin"/>
        <Route element={<Suspense fallback={<Loader/>}> <Forget/></Suspense>} path="/forget"/>
        <Route element={<Suspense fallback={<Loader/>}> <ChangePassword/></Suspense>} path="/change/:id/:tokon"/>
        <Route element={<Suspense fallback={<Loader/>}> <Success/></Suspense>} path="/success/:message"/>
        <Route element={<Suspense fallback={<Loader/>}> <Home/></Suspense>} path="/home"/>
        <Route element={<Suspense fallback={<Loader/>}> <Profile/></Suspense>} path="/profile"/>
        <Route element={<Suspense fallback={<Loader/>}> <CreateTask/></Suspense>} path="/createtask"/>
    </Routes>
    </>
  );
}

export default App;
