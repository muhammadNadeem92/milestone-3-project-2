import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
        <header className='flex mt-16 ml-24 p-8 pb-28 '>
            <section className='w-[65%] mt-16 '>
            <p className="text-xl font-bold ">Hi!</p>
                <h3 className="text-5xl font-bold leading-snug">I&apos;m<span className="text-[#ff4500]"> Muhammad Nadeem</span>
                 <br />
                a Frontend Developer</h3>
                
               
              <Link href='/contact'> <button className="border rounded-xl bg-black hover:bg-white text-white  px-10 py-4 hover:text-black  font-semibold mt-16 ">Hire Me</button></Link> 
              <Link href='/projects'> <button className="border rounded-xl bg-[#ff4500]  text-white hover:bg-gray-100  py-4 px-14 hover:text-black font-semibold ml-12">Experiences</button></Link>
            </section>
            <section className='w-1/2 mt-3'>
                <Image src={"/images/profileP.png"} alt='' width={400} height={400} className='rounded-full' />
            </section>
        </header>
    </div>
  )
}

export default Header