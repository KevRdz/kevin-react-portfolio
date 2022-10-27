import React from 'react'

const Work = () => {
  return (
    <div name="work" className='w-full md:h-screen bg-[#0a192f] text-gray-400'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-400 border-red-500'>Work</p>
          <p className='py-6'>Check Out some of my recent work</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div className='shawdow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS App
              </span>
              <div className='pt-8 text-center'>
                <a href="home">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-400 font-bold text-lg'>Deployed</button>
                </a>
                <a href="home">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-400 font-bold text-lg'>GitHub</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work