import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-400 '>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-width[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm: text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-red-600'>About</p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm: grid-cols-2 gap-8'>
            <div className='sm: text-right text-4xl font-bold pl-4'>
              <p>Hi, I'm Kevin, nice to meet you. Please take a look around.</p>
            </div>
            <div className='pr-4'>
              <p>I am a hardworking and driven individual who is always looking to better myself. My hobbies include fishing, camping, sports, and playing video games. I like to try new things, learn new things, and spend time with friends and family. I am always up for a challenge. With a positive mindset and determination, anything is possible.</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About