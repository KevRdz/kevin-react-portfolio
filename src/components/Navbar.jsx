import React, { useState } from 'react'
import Logo from "../assets/KR-Logo.png"
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {TbCertificate} from 'react-icons/tb'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipBoard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess('Copied!');
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }

    setTimeout(() => {
      setCopySuccess(false)
    }, 1500);
  };

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
        <li className='py-4 text-4xl'>
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-4 text-4xl'>
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-4 text-4xl'>
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-4 text-4xl'>
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='p-4 pb-10 text-4xl'>
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className='w-screen h-[60px] flex justify-between items-center bg-[#0072b1]'>
          <a className='flex gap-2 justify-center items-center w-full text-white p-2' href='https://www.linkedin.com/in/kevin-a-rodriguez/'>
            Linkedin <FaLinkedin size={50}/>
          </a>
        </li>
        <li className='w-screen h-[60px] flex justify-between items-center bg-[#171515]'>
          <a className='flex justify-center items-center w-full text-white p-2 gap-2' href='https://github.com/KevRdz'>
            GitHub <FaGithub size={50}/>
          </a>
        </li>
        <li className='w-screen h-[60px] flex justify-between items-center bg-orange-500'>
          <button className='flex justify-center items-center w-full text-white p-2 gap-2' onClick={() =>  copyToClipBoard('kevin.rodriguez678@gmail.com')}>
            E-mail <HiOutlineMail size={50}/>
          </button>
        </li>
        <p className='text-white font-bold text-l'>{copySuccess}</p>
        <li className='w-screen h-[60px] flex justify-between items-center bg-slate-400'>
          <a className='flex justify-center items-center w-full text-white p-2 gap-2' href='https://docs.google.com/document/d/16ac7_8xfFBxeQJxijYDFjMtEjsab7gzrhWsSneQEaOU/edit?usp=share_link'>
            Resume <BsFillPersonLinesFill size={50}/>
          </a>
        </li>
        <li className='w-screen h-[60px] flex justify-between items-center bg-[#3EB489]'>
          <a className='flex justify-center items-center w-full text-white p-2 gap-2' href='https://drive.google.com/file/d/1t3j5d3CMymhy1xOKR7-HsZXxZOfaYZko/view?usp=share_link'>
            GA Certificate <TbCertificate size={50}/>
          </a>
        </li>
      </ul>

      <div className='hidden lg:flex fixed flex-col top-[30%] left-0'>
        <ul>
          <li className='w-[165px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#0072b1]'>
            <a className='flex justify-between items-center w-full text-white' href='https://www.linkedin.com/in/kevin-a-rodriguez/'>
              Linkedin <FaLinkedin size={50}/>
            </a>
          </li>
          <li className='w-[165px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#171515]'>
            <a className='flex justify-between items-center w-full text-white' href='https://github.com/KevRdz'>
              GitHub <FaGithub size={50}/>
            </a>
          </li>
          <li className='w-[165px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-orange-500'>
            <button className='flex justify-between items-center w-full text-white' onClick={() =>  copyToClipBoard('kevin.rodriguez678@gmail.com')}>
              E-mail <HiOutlineMail size={50}/>
            </button>
          </li>
          <p className='text-white font-bold text-l flex items-center justify-center'>{copySuccess}</p>
          <li className='w-[165px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-slate-400'>
            <a className='flex justify-between items-center w-full text-white' href='https://docs.google.com/document/d/16ac7_8xfFBxeQJxijYDFjMtEjsab7gzrhWsSneQEaOU/edit?usp=share_link'>
              Resume <BsFillPersonLinesFill size={50}/>
            </a>
          </li>
          <li className='w-[165px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#3EB489]'>
            <a className='flex justify-between items-center w-full text-white' href='https://drive.google.com/file/d/1t3j5d3CMymhy1xOKR7-HsZXxZOfaYZko/view?usp=share_link'>
              GA Certificate <TbCertificate size={50}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar