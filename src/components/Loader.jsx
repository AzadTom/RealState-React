import React from 'react'

function Loader() {
  return (
    <div className='flex justify-center items-center h-screen bg-[#2E2E2E]'>
      <button type="button" className="bg-[#1E1E1E] text-white" disabled>
  <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
  </svg>
  Processing...
</button>
    </div>
  )
}

export default Loader