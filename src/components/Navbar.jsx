import React, { useState } from 'react'
import Logo from "../assets/KR-Logo.png"
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-400'>
      <div>
        <img src={Logo} alt="Logo Img" style={{ width: "80px"}} />
      </div>

      <ul className='hidden md:flex'>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#0072b1]'>
            <a className='flex justify-between items-center w-full text-white' href='/'>
              Linkedin <FaLinkedin size={50}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#171515]'>
            <a className='flex justify-between items-center w-full text-white' href='/'>
              GitHub <FaGithub size={50}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-orange-500'>
            <a className='flex justify-between items-center w-full text-white' href='/'>
              E-mail <HiOutlineMail size={50}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-slate-400'>
            <a className='flex justify-between items-center w-full text-white' href='/'>
              Resume <BsFillPersonLinesFill size={50}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar