import React from "react";
import income from '../assets/money.svg';

const  IncomeCard=  React.memo(({Tincome})=>{

  return (
    <>
      <div >
      <div className="bg-[#2E2E2E]  flex  items-center gap-4  rounded-[1.5rem]  p-2 sm:p-6" >
        {/* Icon */}
        <div className="bg-[#1E1E1E] p-3 sm:p-6 rounded-[50%]">
            <img src={income} alt="icon"  />
        </div>
        {/* content */}
        <div>
            <h2 className="text-xl sm:text-3xl font-semibold">{Tincome}</h2>
            <p>Incomes</p>
        </div>

      </div>
      </div>
    </>
  );
}) 

export default IncomeCard;
