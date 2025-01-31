import Image from 'next/image'
import React from 'react'

const skills = () => {
  return (
    <div className='bg-black py-16'>
        <h2 className='uppercase text-5xl text-white font-bold text-center hover:text-[#ff4500]' >skills</h2>
        <div className='grid grid-cols-4 gap-8 m-8'>
            <div className='bg-zinc-300'>
                <h3 className='text-center font-bold '>Next.js</h3>
                <Image src={'/images/nextjs.webp'} alt=''  width={270} height={200} className='ml-3' />
            </div>

            <div  className='bg-zinc-300'>
                <h3 className='text-center font-bold '>CSS</h3>
                <Image src={'/images/CSS-Logo.png'} alt=''  width={270} height={200} className='ml-3' />
            </div>

            <div className='bg-zinc-300'>
                <h3 className='text-center font-bold '>Javascript</h3>
                <Image src={'/images/javascript.png'} alt=''  width={170} height={100} className='ml-16' />
            </div>

            <div className='bg-zinc-300'>
                <h3 className='text-center font-bold '>Shadcn</h3>
                <Image src={'/images/shadcn.webp'} alt='' width={270} height={200} className='ml-3' />
            </div>

            <div className='bg-zinc-300'>
                <h3 className='text-center font-bold '>Tailwind CSS</h3>
                <Image src={'/images/tailwind css.webp'} alt=''  width={270} height={200} className='ml-3' />
            </div>

            <div className='bg-zinc-300'>
                <h3 className='text-center font-bold '>React.js</h3>
                <Image src={'/images/react-js.svg'} alt='' width={150} height={200} className='ml-12' />
            </div>

            <div className='bg-zinc-300'>
                <h3 className='text-center font-bold '>Typescript</h3>
                <Image src={'/images/ts.png'} alt='' width={170} height={200} className='ml-12'/>
            </div>

            <div className='bg-zinc-300'>
                <h3 className='text-center font-bold '>HTML</h3>
                <Image src={'/images/html.jpg'} alt='' width={170} height={100} className='ml-12'/>
            </div>

        </div>
    </div>
  )
}

export default skills