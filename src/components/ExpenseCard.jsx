import React from 'react'
import expense from '../assets/bankruptcy.svg'

const  ExpenseCard= React.memo(({Texpense})=>{


  return (
   
   
    <div className="bg-[#2E2E2E]  flex  items-center gap-4  rounded-[1.5rem]  p-2 sm:p-6" >
         {/* Icon */}
         <div className="bg-[#1E1E1E] p-3 sm:p-6  rounded-[50%]">
             <img src={expense} alt="icon"  />
         </div>
         {/* content */}
         <div>
             <h2 className="text-xl sm:text-3xl font-semibold">{Texpense}</h2>
             <p>Expenses</p>
         </div>
 
       </div>
   
 
   )

}) 

export default ExpenseCard