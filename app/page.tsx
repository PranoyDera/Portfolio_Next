import Home from '@/Components/Home'
import Navbar from '@/Components/Navbar'
import Projects from '@/Components/Projects'
import React from 'react'

function page() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Projects/>
    </div>
  )
}

export default page