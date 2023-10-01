import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer' 

function Counter() {

    const init = {
        count :0
    }

    const [state,dispatch] = useReducer(counterReducer,init)

  return (
    <div className='bg-red-600 rounded flex flex-col justify-center items-center'>
        <p>count: {state.count}</p>
      <div>
      <button onClick={()=> dispatch({type: "INCREMENT",payload:state.count+2})} className='px-4 py-2 rounded bg-red-200 m-2 '>INCREMENT</button>
        <button onClick={()=> dispatch({type:"DECREMENT",payload:state.count-2})} className='px-4 py-2 rounded bg-red-200 m-2 '>DECREMENT</button>
      </div>
    </div>
  )
}

export default Counter