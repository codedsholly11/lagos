import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const [menu, setMenu] =useState(false)
  function handleMenu(){
    setMenu(!menu)
  }

  return (
    <div className='flex items-center justify-between py-[10px] md:px-[70px] px-[25px]'>
        <ul className='md:flex gap-[20px] hidden'>
            <li className='md:text-2xl'><Link to='/'>Home</Link></li>
            <li className='text-2xl cursor-pointer'><Link to='/Insighter'>Insighter</Link></li>
            <li className='text-2xl cursor-pointer'><Link to='/Hack'>Hackathoon</Link></li>
        </ul>
        <div>
            <button onClick={handleMenu} className='flex md: text-5xl md:hidden'>{menu ?<IoClose/>:<IoMenu/>}</button>
        </div>
        <div className='flex gap-[20px]'>
            <button className='border-2 border-black rounded-lg h-[8vh] md:w-[16vw] text-xl hidden md:flex md:justify-center md:items-center'><Link to='/Speaker'>Register as a Speaker</Link></button>
            <button className='border-2 border-black rounded-lg h-[8vh] md:w-[16vw] text-2xl bg-black text-white px-[20px]'><Link to='/Reg'>Register Here</Link></button>
        </div>
     
      {menu&&
        <ul className={`flex gap-[10px] w-[85%] text-xl bg-green-200 flex-col items-center py-[10px] font-bold top-0 absolute ${menu ?'top-14': '-top-full'} `}>
        <li className='text-3xl'><Link to='/'>Home</Link></li>
        <li className='text-3xl cursor-pointer'><Link to='/Insighter'>Insighter</Link></li>
        <li className='text-3xl cursor-pointer'><Link to='/Hack'>Hackathoon</Link></li>
        <button className='border-2 border-black rounded-lg h-[8vh] md:w-[16vw] text-xl md:flex md:item-center px-[20px]'><Link to='/Speaker'>Register as a Speaker</Link></button>
        </ul>
        
      }
    </div>
  )
}

export default Nav
