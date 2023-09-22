import React from "react";
import income from '../assets/money.svg';

function IncomeCard() {
  return (
    <>
      <div className="bg-[#2E2E2E]  flex  items-center gap-4 p-4 rounded-[1.5rem]" >
        {/* Icon */}
        <div className="bg-[#1E1E1E] p-4 sm:p-8  rounded-[50%]">
            <img src={income} alt="icon"  />
        </div>
        {/* content */}
        <div>
            <h2 className="text-xl sm:text-3xl font-semibold">$32000</h2>
            <p>Incomes</p>
        </div>

      </div>
    </>
  );
}

export default IncomeCard;
