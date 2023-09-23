export const validateCredential = (userDetails) => {
    let isValid = true;
    const errors = {
      name:"",
      email: "",
      password: "",
    };
  
    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^\S+@\S+\.\S+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  
    if (!userDetails.name) {
      errors.name = "Please enter your first name";
      isValid = false;
    } else if (!userDetails.name.match(nameRegex)) {
      errors.name = "Invalid first name";
      isValid = false;
    }
  
 
  
    if (!userDetails.email) {
      errors.email = "Please enter your email";
      isValid = false;
    } else if (!userDetails.email.match(emailRegex)) {
      errors.email = "Invalid email";
      isValid = false;
    }
  
    if (!userDetails.password) {
      errors.password = "Please enter a password";
      isValid = false;
    } else if (!userDetails.password.match(passwordRegex)) {
      errors.password =
        "Password must contain at least 8 characters, one lowercase letter, one uppercase letter, and one number";
      isValid = false;
    }
  
  
    return { isValid, errors };
  };
  