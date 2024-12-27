import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [nav,setNav]=useState(false)
    const toggleNav=()=>{
        setNav(!nav)
    }
    const menuVariants={
        open:{
            x:0,
            transition:{
                stiffness:20,
                damping:15
            }
        },
        closed:{
            x:-100% ,
            transition:{
                stiffness:20,
                damping:15
            }
        }
    }

  return (
    <div className='fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50'>
        <div className='max-w-[1300px] mx-auto bg-green-200 flex justify-between text-gray-400 text-xl items-center px-12 h-20'>
            <a href="#">Portfolio</a>
            <ul className='hidden md:flex gap-12 z-10 cursor-pointer'>

                <li><Link to='skills' smooth={true}  offset={50} duration={500}>About</Link></li>

                <li><Link to='portfolio' smooth={true} offset={50} duration={500}>Portfolio</Link></li>
                <li><Link to='contact' smooth={true} offset={50} duration={500}>Contact</Link></li>

            </ul>

            <div onClick={toggleNav} className='md:hidden z-30 text-gray-800'>
                {
                    nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>
                }
            </div>

        </div>
      
    </div>
  )
}

export default Navbar
