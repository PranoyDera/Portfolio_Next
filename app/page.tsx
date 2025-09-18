import About from '@/Components/About'
import Home from '@/Components/Home'
import Navbar from '@/Components/Navbar'
import Projects from '@/Components/Projects'
import Skills from '@/Components/Skills'
import React from 'react'

function page() {
  return (
    <>
    <Navbar/>
    <div className='flex flex-col gap-50'>
      <Home/>
      <Projects/>
      <Skills/>
      <About/>
    </div>
    </>
  )
}

export default page