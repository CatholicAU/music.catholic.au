import React from 'react'

function Nav() {
  return (
    <div className='flex flex-row justify-between items-baseline px-8 lg:px-14 pt-8 lg:pt-16 pb-6 text-slate-600 bg-gradient-to-r from-sky-50 to-slate-50'>

      <div id="logo">
        <p className='text-xl lg:text-3xl font-extrabold tracking-tight text-slate-800'>music.catholic.au</p>
        {/* <p className='text-md font-extrabold tracking-tight text-slate-800'>.catholic.au</p> */}
      </div>

      <div id="nav-contact  " className='text-md font-light'>
        <ul className='flex flex-row gap-4 lg:gap-8'>
          
          <a href="#" className='hidden md:flex flex-row justify-center items-center gap-2 py-3 px-6 transition duration-300'>About</a>
          
          <a href="#" className='flex flex-row justify-center items-center gap-2 py-3 px-6 border rounded-full hidden md:flex'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
            <span>Search</span>
          </a>
          
          <a href="#" className='flex flex-row justify-center items-center gap-2 w-12 h-12 md:w-auto md:h-auto md:py-3 md:px-6 bg-gradient-to-r from-blue-700 to-cyan-600 rounded-full text-slate-200 transition duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" /></svg>
            <span className='hidden md:flex'>Talk to us</span>
          </a>
        </ul>
      </div>

    </div>
  )
}

export default Nav;