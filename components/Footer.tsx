import React from 'react';

export default function Footer(){
  return(
    <footer className="flex items-center text-white justify-between min-[700px]:flex-row flex-col  flex items-center max-w-[1280px] gap-10  mx-auto px-8 py-16">
      <div className="min-[700px]:w-[30%] w-full max-w-[480px]">
        <p className="">Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
      </div>
      <div className="min-[700px]:w-[70%] w-full grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] place-items-center gap-10">
        <div className="flex flex-col items-center justify-center gap-5">
          <strong className="mb-2">Landings</strong>
          <a href='/' className="">Home</a>
          <a href='/' className="">Products</a>
          <a href='/' className="">Services</a>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <strong className="mb-2">Company</strong>
          <a href='/' className="">Home</a>
          <a href='/' className="relative">Careers<span className='px-2 py-[2px] text-[10px] absolute left-[113%] rounded-lg bg-[#65E4A3] text-black'>Hiring!</span></a>
          <a href='/' className="">Services</a>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <strong className="mb-2">Resources</strong>
          <a href='/' className="">Blog</a>
          <a href='/' className="">Products</a>
          <a href='/' className="">Services</a>
        </div>
      </div>
     </footer>
  )
}