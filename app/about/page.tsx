import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  return (
    <div className='bg-black py-20 px-16'>
        <div className='flex mt-24 ml-2 text-white  '>
            <section className='w-1/2 '>
         <Image src={'/images/profileP.png'} alt='' width={400} height={350} className='rounded-full'/>
            </section>

            <section className='w-[65%] mt-20 leading-relaxed'>
            <h2 className='text-3xl font-bold'>About <span className='text-[#ff4500]'>Me</span></h2>
            <br />
            <h3 className='text-5xl font-bold '>Frontend <span className='text-[#ff4500]'>Developer</span> </h3>
            <p className='mt-2 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa maxime blanditiis cumque voluptatibus odio placeat quidem, sapiente, accusamus deserunt aut quo ipsum nostrum tempora illum ipsa eius? Placeat, aliquam. Recusandae.</p>  
            <Link href='/projects' ><button className='mt-6 px-20 py-3 border rounded-xl bg-[#ff4500] hover:bg-white hover:text-black text-2xl font-semibold'>Projects</button> </Link>  
            </section>
        </div>
      

    </div>
  )
}

export default AboutPage