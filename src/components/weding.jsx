import React from "react";

import wed1 from '../assets/wed1.jpeg';
import wed2 from '../assets/wed2.jpeg';
import wed3 from '../assets/wed3.jpeg';
import wed4 from '../assets/wed4.jpeg';


import Header from "./header";

function Wedding() {


    const weddings= [{name:"Call me ",price:"ask for price",image:wed1},
    {name:"Call me ",price:"ask for price",image:wed2},
    {name:"Call me ",price:"ask for price",image:wed3},
    {name:"Call me ",price:"ask for price",image:wed4}
]
 


  return (
    <div>   
       
       <Header name="PrintedMugs"/>
        <div className="flex flex-wrap  gap-6 my-6 justify-center">
              {
                weddings.map((prod)=> (

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

export default Wedding;
