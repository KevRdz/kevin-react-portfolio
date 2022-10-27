import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-red-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Kevin Rodriguez</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Full-Stack Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a full-stack developer specializing in creating unique and fun digital experiences. I have a passion for creating exceptional web apps that are both mobile responsive and user-friendly. Currently, I'm enjoying working front-end with React.js and Tailwind.</p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600'>View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3'/>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home