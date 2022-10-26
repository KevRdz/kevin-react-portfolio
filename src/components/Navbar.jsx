import React from 'react'
import Logo from "../assets/KR-Logo.png"
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-400'>
      <div>
        <img src={Logo} alt="Logo Img" style={{ width: "80px"}} />
      </div>

      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      <div className='hidden'>
        <FaBars />
      </div>

      <ul className='hidden'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      <div className='hidden'></div>
    </div>
  )
}

export default Navbar