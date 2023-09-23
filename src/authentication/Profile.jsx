import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Profile() {

   
const [selectedImage,setSelectedImage] = useState("data:image/jpeg;base64,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")


const handleFileInput = (event)=>{


   const file = event.target.files[0];

   if(file)
   {
      const reader = new FileReader();

      reader.onload = (e)=>{

         setSelectedImage(e.target.result);


      }

      reader.readAsDataURL(file);
   }

}

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="inline-block relative overflow-hidden rounded-[50%] w-[120px] h-[120px] bg-[#ccc]">
          <input
            type="file"
            accept="image/*"
            className="absolute opacity-0 cursor-pointer top-0 left-0 w-full h-full"
            onChange={handleFileInput}
          />
          <label
            htmlFor="fileInput"
            className="w-full h-full  cursor-pointer"
          >
            <img
              src={selectedImage}
              alt="profile"
              
            />
          </label>
        </div>
      </div>
    </>
  );
}

export default Profile;
