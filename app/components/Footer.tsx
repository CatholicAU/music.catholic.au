import React from 'react'

function Footer() {
  return (
    <footer className='flex flex-col w-full px-8 lg:px-12 py-36 mt-8 lg:mt-20 text-slate-600 text-center bg-gradient-to-t from-orange-100 to-transparent'>
      <p className='text-xl lg:text-2xl font-extrabold tracking-tight text-slate-800 mb-2'>music.catholic.au</p>
      <div id="copyright" className='text-xs text-slate-500'>Music Council @2024 Allrights reserved</div>
    </footer>
  )
}

export default Footer;