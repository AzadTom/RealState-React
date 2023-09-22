import React from "react";
import IncomeCard from "./IncomeCard";
import ExpenseCard from "./ExpenseCard";

function MainCard() {
  return (
    <>
        <h2 className="sm:my-16 text-2xl sm:text-3xl font-semibold px-4 my-4 sm:mx-8 md:mx-16 ">
          Expenses Tracker
        </h2>
     <main >
     

        <div className="flex justify-center items-center sm:gap-8  m-4 gap-4 md:px-60 my-4 sm:mx-8 md:mx-16 ">
          <div className="flex-1">
            <IncomeCard />
          </div>

          <div className="flex-1">
            <ExpenseCard />
          </div>
        </div>
      </main>
    
    </>
  );
}

export default MainCard;
