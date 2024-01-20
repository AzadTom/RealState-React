import React from 'react'

function ListItem({list,setValue,closeOption}) {
  return (
    <div>
        <ul className='p-2 cursor-pointer' onClick={closeOption}>
           {list.map((item)=>( <li onClick={()=> setValue(item)}>{item}</li> ))} 
        </ul>
    </div>
  )
}

export default ListItem