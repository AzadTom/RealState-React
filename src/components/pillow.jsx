import React from "react";

import pil1 from "../assets/pil1.jpeg";
import pil2 from "../assets/pil2.jpeg";
import pil3 from "../assets/pil3.jpeg";
import pil4 from "../assets/pil4.jpeg";

import Header from "./header";

function Pillow() {
  const pillows = [
    { name: "HEART SHAPE PILLOW ", price: "Rs: 400/-", image: pil1 },
    {name :"SQUARE SHAPE PILLOW",price:"Rs: 450/-",image:pil2},
    {name:"WHITE PLAN PILLOW",price:"Rs. 350/-",image:pil3},
    {name:"MAGIC PILLOW",price:"Rs. 550/-",image:pil4}
  ];

  return (
    <div>
      <Header name="PrintedMugs" />
      <div className="flex flex-wrap  gap-6 my-6 justify-center">
        {pillows.map((prod) => (
          <div className="w-[300px] bg-slate-950 rounded text-white text-center">
            <img
              src={prod.image}
              alt="img"
              className="w-[300px] h-[300px] object-cover"
            />
            <div className="py-2">
              <h3>{prod.name}</h3>
              <h3>{prod.price}</h3>
              <div className="flex items-center gap-2 justify-center">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.fYWt4D0uMjX-yoOAjWbaCgHaHa&pid=Api&P=0&h=180"
                  alt="img"
                  className="w-[24px] h-[24px] rounded-[50%]"
                />
                <h3>+91 9582045685</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pillow;
