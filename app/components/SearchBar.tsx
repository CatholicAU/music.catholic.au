import React from 'react';

function SearchBar() {
  return (
    <div className="w-full flex justify-center items-center gap-2 border-t border-t-green-700 border-b border-b-green-700 border-y-0 mb-8 md:mb-20 bg-primary-100">

      <div className="w-full max-w-screen-2xl flex flex-row justify-between items-center px-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
        
        <input type="email" className="w-full flex flex-row justify-between items-center form-input py-6 md:py-8 border-0 bg-transparent" placeholder='Search'></input>
      </div>
    </div>
  )
}

export default SearchBar;