import React from 'react'
import TaskItem from '../components/TaskItem'
import income from '../assets/money.svg';
import expense from '../assets/bankruptcy.svg'

function TasksContainer() {
  return (
    <>
     <section className='flex justify-center'>
     <div className='grid grid-cols-1 sm:grid-cols-2  gap-4 mx-4 my-4 sm:mx-8 md:mx-16' >

        
        <TaskItem id={income} type="Income"/>
        <TaskItem id={expense} type="Expense"/>
        <TaskItem id={income} type="Income"/>
        <TaskItem id={income} type="Income"/>
        <TaskItem id={income} type="Income"/>
        <TaskItem id={expense} type="Expense"/>
        <TaskItem id={income} type="Income"/>
        <TaskItem id={income} type="Income"/>

 

</div>
     </section>
    </>
  )
}

export default TasksContainer