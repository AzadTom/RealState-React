import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { validateCredential } from "./validateCredential";
import InputField from "./InputField";


function SignUp() {
  const navigate = useNavigate();


   
  const { signuphandler} = useAuth( );

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    hide: { password: true },
    errors: {
      name: "",
      email: "",
      password: "",
    },
  });

  const signupformhandler = async (event) => {
    event.preventDefault();

    const { isValid, errors } = validateCredential(userDetails);

    if (isValid) {
      await signuphandler(userDetails);
      
    } else {
      setUserDetails({ ...userDetails, errors });
    }
  };

  const handleInputFocus = (field) => {
    setUserDetails((prevState) => ({
      ...prevState,
      errors: {
        ...prevState.errors,
        [field]: "", // Clear the corresponding error when the input field is focused
      },
    }));
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form className="flex flex-col gap-4 sm:bg-[#2E2E2E] p-2 sm:p-8 rounded ">
          <div>
            <h2 className="text-3xl font-semibold">SIGN UP</h2>
            <p className="text-sm font-thin">Lets create account fast</p>
          </div>
          <InputField
            id={"name"}
            type={"text"}
            value={userDetails.name}
            onChange={(event) =>
              setUserDetails({ ...userDetails, name: event.target.value })
            }
            onFocus={() => handleInputFocus("name")}
            error={userDetails.errors.name}
            field={"Username"}
          />
          <InputField
            id={"email"}
            type={"email"}
            value={userDetails.email}
            onChange={(event) =>
              setUserDetails({ ...userDetails, email: event.target.value })
            }
            onFocus={() => handleInputFocus("email")}
            error={userDetails.errors.email}
            field={"Email"}
          />
          <InputField
            id={"password"}
            type={userDetails.hide.password? "text":"password"}
            value={userDetails.password}
            onChange={(event) =>
              setUserDetails({ ...userDetails, password: event.target.value })
            }
            onFocus={()=> handleInputFocus("password")}
            field={"Password"}
            error={userDetails.errors.password}
            hidePassword={userDetails.hide.password}
            toggleHide={()=>{
              setUserDetails((prevState)=>({
                ...prevState,
                hide:{
                  password: !prevState.hide.password
                }
              }))
            }}

          />
          <button
            className="bg-[#2E2E2E] sm:bg-[#1E1E1E] px-4 py-2 rounded"
            onClick={(event)=> signupformhandler(event)}
          >
            SIGNUP
          </button>
          <p
            className="text-center cursor-pointer"
            onClick={() => navigate("/signin")}
          >
            Already register?<span>Sign In</span>
          </p>
        </form>
      </div>
    </>
  );
}

export default SignUp;
