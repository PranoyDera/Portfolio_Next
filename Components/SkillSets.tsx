'use client'
import Image from 'next/image'
import React from 'react'




function SkillSets() {
  return (
    <div className='md:px-12'>
        <div className='md:ml-20 gap-10 md:gap-20 justify-center items-center p-5 md:p-10 grid grid-cols-3 md:grid-cols-5'>
          <Image
          alt="React"
          src={"/react.png"}
          width={100}
          height={100}
          className='hover:scale-125 transition duration-300'
          />
          <Image
          alt="Express"
          src={"/express.png"}
          width={100}
          height={100}
          className='hover:scale-125 transition duration-300 bg-white rounded-full p-2'
          />
          <Image
          alt="Express"
          src={"/mongodb.png"}
          width={100}
          height={100}
          className='hover:scale-125 transition duration-300'
          />
        <Image
          alt="Next"
          src={"/next.js.png"}
          width={100}
          height={100}
          className='hover:scale-125 transition duration-300 bg-white rounded-full p-0.5'
          />
         <Image
          alt="Html"
          src={"/html.png"}
          width={100}
          height={100}
          className='hover:scale-125 transition duration-300'
          />
        <Image
          alt="Node"
          src={"/node-js.png"}
          width={100}
          height={100}
          className='hover:scale-125 transition duration-300 bg-white rounded-full p-1'
          />
        <Image
          alt="CSS"
          src={"/css-alt.png"}
          width={100}
          height={100}
          className='hover:scale-125 transition duration-300'
          />
          <Image
          alt="Tailwind"
          src={"/tailwind-css.png"}
          width={100}
          height={100}
          className='hover:scale-125 transition duration-300 bg-white rounded-full p-1'
          />
        <Image
          alt="JS"
          src={"/JavaScript.png"}
          width={100}
          height={100}
          className='hover:scale-125 transition duration-300'
          />
        <Image
          alt="TS"
          src={"/typescript.png"}
          width={100}
          height={100}
          className='hover:scale-125 transition duration-300'
          />
        </div>
    </div>
  )
}

export default SkillSets