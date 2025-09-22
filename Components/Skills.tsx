import React from 'react'
import SkillSets from './SkillSets'
import { GradientText } from './ui/shadcn-io/gradient-text'


function Skills() {
  return (
    <div className='px-5 w-full flex justify-center items-center flex-col'>
      <div className='w-full flex md:justify-start justify-center md:items-start md:px-20'>
         <GradientText className="text-4xl md:text-6xl font-bold mb-4 font-[roboto]" text="EXPERTISE" />
      </div>
        <SkillSets/>
    </div>
  )
}

export default Skills