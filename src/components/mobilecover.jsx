import React from "react";
import cover from '../assets/cover.jpeg';
import Header from "./header";

function Cover() {
  const covers = [{ name: "Call me", price: "ask for price", image: cover }];

  return (
    <div>
      <Header name="PrintedMugs" />
      <div className="flex flex-wrap  gap-6 my-6 justify-center">
        {covers.map((prod) => (
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

export default Cover;
