import React from 'react'
import TaskItem from '../components/TaskItem'
import income from '../assets/money.svg';
import expense from '../assets/bankruptcy.svg'

function TasksContainer({tasklist}) {


   
  return (
    <>
     <section className='flex justify-center'>
     <div className='grid grid-cols-1 sm:grid-cols-2  gap-4 mx-4 my-4 sm:mx-8 md:mx-16' >
            {
               tasklist.map((item)=>(

                  <TaskItem icon={item.type == "expense"? expense : income} item={item} key={item._id}/>
               ))


            }
         </div>
     </section>
    </>
  )
}

export default TasksContainer