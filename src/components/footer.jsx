import React from 'react'
import footer from '../assets/footer.jpg';

function Footer() {
  return (
    <div className='bg-slate-950 text-slate-100'>

       <img src={footer} alt="footer-img" className='w-full h-full' />
       <div className='text-center font-extralight sm:text-xl flex flex-col gap-2 p-2'>
            <h3>H, 354, Gali No. 17, near Shiv Mandir, Surat Nagar Phase 1</h3>
              <p>Gurgaon Rural, Gurugram, Haryana 122001</p>
              <p>E-mail : vishalprinter12@gmail.com</p>
              <p>Mob.: 9582045685</p>
       </div>

    </div>
  )
}

export default Footer