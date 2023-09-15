import React from 'react'

function GalleryCard({item}) {
  return (
    <>
    <div className='w-[250px] h-full p-6 text-center'>
      <img src={item.img} alt="img"  className='w-full h-full bg-cover object-cover p-1 bg-white rounded-lg' />
       <h1 className='p-2'>{item.title}</h1>
    </div>
    </>
  )
}

export default GalleryCard