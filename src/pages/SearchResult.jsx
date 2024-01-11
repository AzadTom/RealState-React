import React from 'react'
import Products from '../components/Products/Products';

function SearchResult() {
  return (
    <>
    <h2 className='p-2 text-xl font-medium text-[var(--secondarytext)]'>Search Result...</h2>
    <div>
      <Products content={"Property for you"}/> 
      <Products/> 
      <Products/> 
      <Products/> 
      <Products/>  
    </div>
    </>
  )
}

export default SearchResult