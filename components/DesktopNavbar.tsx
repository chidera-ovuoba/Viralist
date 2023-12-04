import React from 'react';
import MobileNavbar from './MobileNavbar';

export default function DesktopNavbar(){
    return(
    <nav className='text-white flex  items-center justify-between  py-3'>
    <div className="">
      <strong className="">Viralyst</strong>
    </div>
    <ul className="items-center md:flex hidden text-sm justify-center gap-[2vw]">
      <li className='text-white'>About</li>
      <li className='text-white'>How it works</li>
      <li className='text-white'>Pricing</li>
      <li className='text-white'>contact</li>
      <li className='text-white'>features</li>
    </ul>
    <div className="text-sm z-10 flex items-center gap-6 md:ml-0 ml-auto justify-center">
      <a href="/">Login</a>
      <button className='bg-white text-black rounded-2xl px-6 py-1'>Register</button>
    </div>
    <MobileNavbar/>
  </nav>
    )
}