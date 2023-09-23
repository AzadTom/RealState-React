import React from 'react'
import { useReducer } from 'react';
import { createContext,useContext} from 'react'
import authreducer from '../reducers/AuthReducer';
import { useNavigate } from 'react-router-dom';
import {SIGNUP,LOGIN,LOGOUT} from '../utils/constant.js';
import {signupservice,loginservice,logoutservice,currentProfile,forgetPassword} from '../services/authservice.js'


const AuthContext = createContext();


function AuthContextProvider({children}) {


const navigate =useNavigate();


  const initialState = {
    token: null,
    currentUser: null,
    isLoggedIn: false,
  };

    const[state,dispatch] = useReducer(initialState,authreducer);


    const signuphandler = async({name,email,password})=>{


       try {

        const response = await signupservice(name,email,password);

        console.log(response);

         const {data:{createduser,token}} = response;

         

            dispatch({type:SIGNUP,payload:{user:createduser,token:token}});

            console.log(response.data);

              navigate("/home");

           

      
        
       } catch (error) {

         console.log(error);
        
       }


    }

    const loginhandler = async({email,password})=>{

        
        try {

            const response = await loginservice(email,password);
    
             const {data:{founduser,token}} = response;
    
             
    
                dispatch({type:LOGIN,payload:{user:founduser,token:token}});
    
                console.log(response.data);
    
                  navigate("/home");
    
               
    
          
            
           } catch (error) {
    
             console.log(error);
            
           }
        


    }

    const logouthandler = async()=>{

 
         try {

            const response = await logoutservice();

            const {data} = response;

              console.log(data)
        

                dispatch({type:LOGOUT})
                
                navigate("/")

       

            
            
         } catch (error) {

            console.log(error);
            
         }

    }


    const getProfile = async()=>{

        try {

            const response = await currentProfile();

            const {data:{currentuser}} = response;

          
                return currentuser;

            
            
        } catch (error) {
            
            console.log(error);
        }

        

    }

    const forgethandler = async(email)=>{

      try {

        const response = await forgetPassword(email);

          console.log(response)

           navigate("/")

         
        
      } catch (error) {

        console.log(error);
        
      }
    }


    
  return (
    <>
    <AuthContext.Provider  value={{ signuphandler,loginhandler,logouthandler,getProfile,state,forgethandler}}>
        {children}
    </AuthContext.Provider>
    </>
  )
}

const useAuth = ()=> useContext(AuthContext);

export default AuthContextProvider;
export {useAuth}

