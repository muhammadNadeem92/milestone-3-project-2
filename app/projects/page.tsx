import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const projects = () => {
  return (
    <div>
        <h2 className='uppercase text-black text-5xl font-bold text-center mt-5 hover:text-[#ff4500]'>project</h2>
        <div className='grid grid-cols-2 gap-16 rounded-md my-16 mx-20'>
            <div className='bg-zinc-400 '>
                <Image src={'/images/project-1.png'} alt='' width={500} height={500} className='ml-6 mt-4 '/>
                <h3 className='text-2xl hover:text-[#ff4500] ml-6 mt-4'>Simple Multiple Pages Website</h3>
                <p className=' hover:text-[#ff4500] ml-6'>in which i use next.js and custom css</p>
                <button className='border rounded-xl text-white bg-[#ff4500] hover:bg-white hover:text-black  py-3 ml-6 my-4 px-16'><Link href='https://next-js-assigments.vercel.app/' target='_blank'  >View Project</Link></button>
            </div>

            <div className='bg-zinc-400  '>
                <Image src={'/images/project-2.png'} alt='' width={500} height={500} className='ml-6 mt-4'/>
                <h3 className='text-2xl hover:text-[#ff4500] ml-6 mt-4'>API Data Fetching Assignment</h3>
                <p className=' hover:text-[#ff4500] ml-6'>in which I fetch data an external API</p>
                <button className='border rounded-xl text-white bg-[#ff4500] hover:bg-white hover:text-black  py-3 ml-6 my-4 px-16'><Link href='https://class-assignment-07-alpha.vercel.app/' target='_blank'  >View Project</Link></button>
            </div>

            <div className='bg-zinc-400 '>
                <Image src={'/images/project-3.png'} alt='' width={500} height={500} className='ml-6 mt-4'/>
                <h3 className='text-2xl hover:text-[#ff4500] ml-6 mt-4'>Blog Assignment</h3>
                <p className=' hover:text-[#ff4500] ml-6'>in which I use next.js ,tailwind css,and sanity CMS</p>
                <button className='border rounded-xl text-white bg-[#ff4500] hover:bg-white hover:text-black  py-3 ml-6 my-4 px-16'><Link href='https://class-assignment-08-8nuz.vercel.app/' target='_blank'  >View Project</Link></button>
            </div>

            <div className='bg-zinc-400 '>
                <Image src={'/images/project-4.png'} alt='' width={500} height={500} className='ml-6 mt-4'/>
                <h3 className='text-2xl hover:text-[#ff4500] ml-6 mt-4'>E-Commerce Website UI</h3>
                <p className=' hover:text-[#ff4500] ml-6'>This e commerce website I created during the Hackathon</p>
                <button className='border rounded-xl text-white bg-[#ff4500] hover:bg-white hover:text-black  py-3 ml-6 my-4 px-16'><Link href='https://ui-hackathon-drab.vercel.app/' target='_blank' >View Project</Link></button>
            </div>
        </div>

    </div>
  )
}

export default projects