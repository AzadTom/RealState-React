import React from "react";
import mug1 from "../assets/mug1.jpeg";
import mug2 from "../assets/mug2.jpeg";
import mug3 from "../assets/mug3.jpeg";
import mug4 from "../assets/mug4.jpeg";
import mug5 from "../assets/mug5.jpeg";
import Header from "./header";

function Printedmug() {
  const mugs = [
    { image: mug1, name: "Simplet White Mug with printed", price: "Rs. 150" },
    {image:mug2,name :"Colour Mug With Printed Photo", price:"Rs. 199/-"},
    {image:mug4 ,name:"Magic Mug With Printed Photo",price:"Rs. 300"},
    {image:mug5,name:"Black Mug With Printed Photo",price:"Rs. 300/-"}
  ];

  return (
    <div>   
       
       <Header name="PrintedMugs"/>
        <div className="flex flex-wrap  gap-6 my-6 justify-center">
              {
                mugs.map((prod)=> (

                  <div className="w-[300px] bg-slate-950 rounded text-white text-center">
                    <img src={prod.image} alt="img"className="w-[300px] h-[300px] object-cover" />
                    <div className="py-2">
                      <h3>{prod.name}</h3>
                      <h3>{prod.price}</h3>
                      <div className="flex items-center gap-2 justify-center">
                        <img src="https://tse2.mm.bing.net/th?id=OIP.fYWt4D0uMjX-yoOAjWbaCgHaHa&pid=Api&P=0&h=180" alt="img"  className="w-[24px] h-[24px] rounded-[50%]"/>
                        <h3>+91 9582045685</h3>
                      </div>
                    </div>
                  </div>

                ))
              }
        </div>
      
    </div>
  );
}

export default Printedmug;
