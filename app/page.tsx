import Home from '@/Components/Home'
import Navbar from '@/Components/Navbar'
import Projects from '@/Components/Projects'
import Skills from '@/Components/Skills'
import React from 'react'

function page() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Projects/>
      <Skills/>
    </div>
  )
}

export default page