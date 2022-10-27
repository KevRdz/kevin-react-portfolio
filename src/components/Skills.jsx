import React from 'react'
import css from '../assets/css.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import mongo from '../assets/mongo.png'
import node from '../assets/node.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'


const Skills = () => {
  return (
    <div name="skills" className='bg-[#0a192f] text-gray-400 w-full h-screen'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-red-600'>Skills</p>
          <p className='py-4'>These are the techs ive worked with.</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={react} alt="react icon" />
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={javascript} alt="js icon" />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={html} alt="html icon" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={css} alt="css icon" />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={mongo} alt="react icon" />
            <p className='my-4'>MongoDB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={node} alt="node icon" />
            <p className='my-4'>Node</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={tailwind} alt="tailwind icon" />
            <p className='my-4'>Tailwind</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={github} alt="github icon" />
            <p className='my-4'>GitHub</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills