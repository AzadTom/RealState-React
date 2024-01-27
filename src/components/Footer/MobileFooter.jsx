import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

function MobileFooter() {
  return (
    <div className='sticky bottom-0 flex justify-between items-center sm:hidden bg-white px-4 py-2'>
        <button className='flex-1'><PhoneIcon/></button>
        <button className='flex-1'><EmailIcon/></button>
        <button className='flex-1'><ChatBubbleIcon/></button>
    </div>
  )
}

export default MobileFooter