import React from 'react'
import newtImg from '../assets/newt.png'
import fish from '../assets/fish-tracker.png'
import ttt from '../assets/ttt.png'
import crypto from '../assets/crypto-scanner.png'

const Work = () => {
  return (
    <div name="work" className='w-full md:h-screen bg-[#0a192f] text-gray-400'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-400 border-red-500'>Work</p>
          <p className='py-6'>Check out some of my work.</p>
        </div>
        {/* Container*/}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid Item */}
          <div style={{backgroundImage: `url(${newtImg})` }} className='shawdow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                NEWT
              </span>
              <div className='pt-8 text-center'>
                <a href="https://newt-activity.netlify.app/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Deployed</button>
                </a>
                <a href="https://github.com/KevRdz/newt-front-end">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GitHub</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${fish})` }} className='shawdow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Fish Tracker
              </span>
              <div className='pt-8 text-center'>
                <a href="https://fish-tracker.herokuapp.com/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Deployed</button>
                </a>
                <a href="https://github.com/UncleHagi/fish-tracker">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GitHub</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${ttt})` }} className='shawdow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Tic-Tac-Toe
              </span>
              <div className='pt-8 text-center'>
                <a href="https://kevrdz-ttt.netlify.app/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Deployed</button>
                </a>
                <a href="https://github.com/KevRdz/ttt-weekend">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GitHub</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${crypto})` }} className='shawdow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Crypto Scanner
              </span>
              <div className='pt-8 text-center'>
                <a href="https://crypto-scanner.netlify.app/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Deployed</button>
                </a>
                <a href="https://github.com/KevRdz/crypto-scanner">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GitHub</button>
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