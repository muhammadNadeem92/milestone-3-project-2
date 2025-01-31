
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='bg-gray-800 w-full h-max flex justify-between items-center p-4 text-white'>
          <h2 className='text-[#ff4500] text-3xl '>Muhammad<span className='text-white '>Nadeem</span></h2>
          <ul className='flex gap-16'>
          <li className='text-xl hover:text-[#ff4500]'><Link href='/'>Home</Link></li>
          <li className='text-xl hover:text-[#ff4500]'><Link href='/about'>About</Link></li>
          <li className='text-xl hover:text-[#ff4500]'><Link href='/projects'>Projects</Link></li>
          <li className='text-xl hover:text-[#ff4500]'><Link href='/skills'>Skills</Link></li> </ul>
          <button className='bg-[#ff4500] hover:bg-white text-white hover:text-black text-xl py-2 px-3 rounded '>Contact Me</button>
        </div>
    </div>
  )
}   

export default Navbar
