"use client";
import React, { useState } from'react';
import { MdCancel, MdMenu } from "react-icons/md";

export default function MobileNavbar(){
  const [openNav,setOpenNav] = useState(false);
    return(
        <div className='ml-3 block md:hidden'>
      <span className='' onClick={()=>setOpenNav(true)}><MdMenu/></span>
      <section className={`fixed ${openNav ? 'flex':'hidden'} items-center inset-0 justify-center `}>
        <div className="w-[40%] h-full " onTouchStart={()=>setOpenNav(false)}></div>
        <div className={`w-[60%] h-full bg-[#D05404] ${openNav && 'animate-open'} `}>
          <div className="px-2 py-3 w-full flex items-center justify-end text-3xl" onClick={()=>setOpenNav(false)}><MdCancel  /></div>
          <ul className="my-5">
         <li className='text-white capitalize leading-3 pr-3 pl-7 py-5 cursor-pointer'>About</li>
         <li className='text-white capitalize leading-3 pr-3 pl-7 py-5 cursor-pointer'>How it works</li>
         <li className='text-white capitalize leading-3 pr-3 pl-7 py-5 cursor-pointer'>Pricing</li>
         <li className='text-white capitalize leading-3 pr-3 pl-7 py-5 cursor-pointer'>contact</li>
         <li className='text-white capitalize leading-3 pr-3 pl-7 py-5 cursor-pointer'>features</li>
          </ul>
        </div>
      </section>
      </div>
    )
}