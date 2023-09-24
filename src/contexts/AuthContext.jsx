import React from "react";
import { useReducer } from "react";
import { createContext, useContext } from "react";
import { authReducer } from "../reducers/AuthReducer.js";
import { useNavigate } from "react-router-dom";
import { SIGNUP, LOGIN, LOGOUT } from "../utils/constant.js";
import {
  signupservice,
  loginservice,
  logoutservice,
  forgetPassword,
  changePassword
} from "../services/authservice.js";
import toast from "react-hot-toast";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const localStorageToken = JSON.parse(localStorage.getItem("login"));

  let initialState = {
    token: localStorageToken?.token || null,
    currentUser: localStorageToken?.user || null,
    isLoggedIn: false,
  };

  const [state, dispatch] = useReducer(authReducer,initialState);
 

  const signuphandler = async ({ name, email, password }) => {
    try {
      const response = await signupservice(name, email, password);

      console.log(response.data);

      localStorage.setItem(
        "login",
        JSON.stringify({ user: response.data.createduser, token: response.data.token })
      );

      dispatch({
        type: SIGNUP,
        payload: {
          user: response.data.createduser,
          token: response.data.token,
        },
      });

      toast.success("Register successfully!", {
        style: {
          border: "1px solid #1E1E1E",
          padding: "16px",
          color: "#fff",
          background: "#1E1E1E",
        },
        iconTheme: {
          primary: "#FFF",
          secondary: "#1E1E1E",
        },
      });

      navigate("/home");

    } catch (error) {
      toast.error("Something went wrong!", {
        style: {
          border: "1px solid #1E1E1E",
          padding: "16px",
          color: "#fff",
          background: "#1E1E1E",
        },
        iconTheme: {
          primary: "#FFF",
          secondary: "#1E1E1E",
        },
      });
      console.log(error);
    }
  };

  const loginhandler = async ({ email, password }) => {
    try {
      const response = await loginservice(email, password);
      console.log(response.data);

      localStorage.setItem(
        "login",
        JSON.stringify({ user: response.data.founduser, token: response.data.token })
      );
      dispatch({
        type: LOGIN,
        payload: { user: response.data.founduser, token: response.data.token },
      });

      console.log(state);

      toast.success("Login successfully!", {
        style: {
          border: "1px solid #1E1E1E",
          padding: "16px",
          color: "#fff",
          background: "#1E1E1E",
        },
        iconTheme: {
          primary: "#FFF",
          secondary: "#1E1E1E",
        },
      });

      navigate("/home");


    } catch (error) {
      toast.error("Something went wrong!", {
        style: {
          border: "1px solid #1E1E1E",
          padding: "16px",
          color: "#fff",
          background: "#1E1E1E",
        },
        iconTheme: {
          primary: "#FFF",
          secondary: "#1E1E1E",
        },
      });
      console.log("login", error);
    }
  };

  const logouthandler = async () => {
    try {
      const response = await logoutservice();

      const { data } = response;

      console.log(data);

      dispatch({ type: LOGOUT });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };



  const forgethandler = async (email) => {
    try {
      const response = await forgetPassword(email);
  

      const {status ,data :{userid,tokon}} = response;

      if(status ===200 || status ===201)
      {

            navigate(`/change/${userid}/${tokon}`);

      }

      

    
    } catch (error) {
      console.log(error);
    }
  };

  const changepasswordhandler = async(userId,tokon,password)=>{

          try {

            const response  = await changePassword(userId,tokon,password);

            const {status ,data:{message}} = response;

            if(status===200 || status ===201)
            {

              console.log(message);
              navigate(`/success/${message}`);

              setTimeout(() => {

                navigate("/home");
                
              }, 3000);
               
            }

            
          } catch (error) {
            
            console.log(error);

          }
  }
  return (
    <AuthContext.Provider
      value={{
        signuphandler,
        loginhandler,
        logouthandler,
        state,
        forgethandler,
        changepasswordhandler
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);


