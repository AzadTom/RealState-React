import React, { useEffect, useMemo, useState } from "react";
import IncomeCard from "./IncomeCard";
import ExpenseCard from "./ExpenseCard";
import TasksContainer from "./TasksContainer";
import History from "./History";
import { getTasks } from "../services/taskservice";

function MainCard() {



  const [tasklist,setasks] = useState([ ]);
 
  const [TotalamountbyType,setTotalamountbyType] = useState({expense:0,income:0});

   





   useEffect(()=>{
      
        async function fetchdata( ){

          const response  = await getTasks( );

          const { status ,data} = response;

          setasks(data.tasks);
          

           const total =  tasklist.reduce((acc,curr)=>{

            const {type ,amount} = curr;

            acc[type] = (acc[type] ||0 )+ amount;


            return acc;



          },{ });

          

          setTotalamountbyType(total);
     

         


       }

       fetchdata(); 

       


   },[tasklist])



   
     


    


       


  return (
    <>
        <h2 className="sm:my-16 text-2xl sm:text-3xl font-semibold my-4 sm:mx-8 md:mx-16 px-4 ">
          Expenses Tracker
        </h2>
     <main >
     

        <div className="flex justify-center items-center sm:gap-8  m-4 gap-4 md:px-60 my-4 sm:mx-8 md:mx-16 ">
          <div className="flex-1">
            <IncomeCard  Tincome= {TotalamountbyType.income > 0 ?TotalamountbyType.income: 0 } />
          </div>

          <div className="flex-1">
            <ExpenseCard  Texpense= {TotalamountbyType.expense >0 ? TotalamountbyType.expense:0 }/>
          </div>
        </div>
      </main>

       <History/>
      <TasksContainer tasklist={tasklist}/>
    
    </>
  );
}

export default MainCard;
