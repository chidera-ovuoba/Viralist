import React from 'react';
import Image from 'next/image';
import socialBG from "../public/assets/btn-hero-socmed.png";
import EverythingViral from "../public/assets/img-hero.png";

export default function Header(){
    return(
        <header className='flex items-center  mx-auto w-full justify-center px-8 pt-16 flex-col '>
       <div className="text-center">
        <h1 className="text-[62px] text-white leading-[112%] mb-9 font-semibold ">Go <span className='text-[#D05404]'>Viral</span> with Analysis!</h1>
        <p className="text-sm text-[#8b8b8b] max-w-[500px] mx-auto ">Don’t let your computer memories consumes all of those browser tabs. 
Findtrend  let you gathers all of your favorite website into one place.</p>
        </div>
        <div className="flex items-center justify-center mt-16 relative">
          <button className='bg-[#D05404] text-white rounded-[50px] self-start px-7 py-3'>Get Started 🔥</button>
          <Image src={EverythingViral} alt='exerything_viral' className='absolute top-[-2rem] right-[-7rem]' width={101} height={79}/>
       </div>
        <div className="mt-[9rem]">
          <Image src={socialBG} alt='exerything_viral' className='' width={1077} height={178}/>
        </div>
      </header>
    )
}