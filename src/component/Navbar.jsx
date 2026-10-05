import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between items-center shadow-gray-700 shadow-sm font-bold text-2xl p-2 bg-slate-800 z-10 cursor-pointer select-none'>
     <div className='text-white border-2 px-2 rounded-2xl'>LOGO</div>
      <ul className='flex justify-between items-center gap-4 font-semibold text-white mr-5 '>
        <li className='hover:border-2 hover:bg-white hover:text-black hover:rounded-2xl hover:px-2'>HOME</li>
        <li className='hover:border-2 hover:bg-white hover:text-black hover:rounded-2xl hover:px-2'>GYM</li>
        <li className='hover:border-2 hover:bg-white hover:text-black hover:rounded-2xl hover:px-2'>CAHT,BOT</li>
        <li className='hover:border-2 hover:bg-white hover:text-black hover:rounded-2xl hover:px-2'>PRODUCT</li>
      </ul>
    </nav>
  )
}

export default Navbar