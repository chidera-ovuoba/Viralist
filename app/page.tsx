"use client"
import Image from 'next/image';
import revenueBG from "../public/assets/Image Frame.png";
import chartBG from "../public/assets/Group 281.png";
import teamBG from "../public/assets/Image (4)_banner.png";
import DesktopNavbar from '@/components/DesktopNavbar';
import Header from '@/components/Header';
import { FaCheck, FaEye, FaLeaf } from "react-icons/fa";
import { MdOutlineLightMode } from 'react-icons/md';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Testimonial from '@/components/Testimonial';

export default function Home() {
  return (
    <main className="bg-black ">
      <div className='bg-[url("../public/assets/Ornament.svg")]  bg-start  px-6'>
      <div className='max-w-[1280px] mx-auto px-6'>
      <DesktopNavbar/>
      <Header/>
      </div>      
      </div>      
      <section className="grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] place-items-center gap-10 py-16 max-w-[1280px] mx-auto px-10">
        <div className="max-w-[494px] min-w-[300px] w-full">
          <Image src={revenueBG} alt='revenue_bg' className='object-contain w-full h-full'/>
        </div>
        <div className="flex  w-full max-w-[484px] justify-center flex-col gap-10 text-white">
          <h3 className="text-[30px] text-white leading-[56px] ">We connect our customers with the best, and help them keep up-and stay open.</h3>
          <ul className="mb-3 flex flex-col justify-center gap-4">
            <li className="flex items-center gap-5 text-[20px] text-white leading-[2] "><FaCheck  className='text-[30px] text-white rounded-full p-2 bg-[#D05404]'/>We connect our customers with the best.</li>
            <li className="flex items-center gap-5 text-[20px] text-white leading-[2] "><FaCheck  className='text-[30px] text-white rounded-full p-2 bg-[#D05404]'/>Advisor success customer launch party.</li>
            <li className="flex items-center gap-5 text-[20px] text-white leading-[2] "><FaCheck  className='text-[30px] text-white rounded-full p-2 bg-[#D05404]'/>Business-to-consumer long tail.</li>
          </ul>
          <button className="self-start bg-[#D05404] text-white rounded-[50px] self-start px-7 py-3">Start now</button>
        </div>
      </section>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] place-items-center gap-10 py-16 max-w-[1280px] mx-auto px-10">
        <div className="flex  w-full max-w-[484px] justify-center flex-col gap-10 text-white">
          <h3 className="text-[30px] text-white leading-[56px] ">We connect our customers with the best, and help them keep up-and stay open.</h3>
          <ul className="mb-3 flex justify-center flex-col gap-5">
            <li className="flex items-center gap-5 text-[20px] px-5 py-2 hover:bg-[#D05404] hover:text-white cursor-pointer text-black leading-[2] bg-white rounded-md "><FaLeaf   className='text-[30px]'/>We connect our customers with the best.</li>
            <li className="flex items-center gap-5 text-[20px] px-5 py-2 hover:bg-[#D05404] hover:text-white cursor-pointer text-black leading-[2] bg-white rounded-md "><FaEye   className='text-[30px] '/>Advisor success customer launch party.</li>
            <li className="flex items-center gap-5 text-[20px] px-5 py-2 hover:bg-[#D05404] hover:text-white cursor-pointer text-black leading-[2] bg-white rounded-md "><MdOutlineLightMode   className='text-[30px]'/>Business-to-consumer long tail.</li>
          </ul>
        </div>
        <div className="max-w-[494px] min-w-[300px]  min-w-[30 w-full">
          <Image src={chartBG} alt='chart_bg' className='object-contain w-full h-full'/>
        </div>
      </section>
      <section className="flex flex-col gap-10 py-16 max-w-[1280px] mx-auto px-10">
        <div className="w-full">
          <Image src={teamBG} alt='revenue_bg' className='object-contain w-full h-full'/>
        </div>
        <div className="flex  w-full justify-between max-[690px]:flex-col items-center  gap-10 text-white">
          <h3 className="text-[30px] flex-1  text-white leading-[56px] ">We connect our customers with the best, and help them keep up-and stay open.</h3>
          <div className="flex flex-1 min-[690px]:justify-end justify-center">
          <ul className="flex flex-col justify-center gap-4 ">
            <li className="flex items-center  gap-5 text-[20px] text-white leading-[2] "><FaCheck  className='text-[30px] text-white rounded-full p-2 bg-[#D05404]'/>We connect our customers with the best.</li>
            <li className="flex items-center  gap-5 text-[20px] text-white leading-[2] "><FaCheck  className='text-[30px] text-white rounded-full p-2 bg-[#D05404]'/>Advisor success customer launch party.</li>
            <li className="flex items-center  gap-5 text-[20px] text-white leading-[2] "><FaCheck  className='text-[30px] text-white rounded-full p-2 bg-[#D05404]'/>Business-to-consumer long tail.</li>
          </ul>
          </div>
        </div>
          <button className="self-center bg-[#D05404] text-white rounded-[50px] self-start px-8 py-3">Start now</button>
      </section>
    <Testimonial/>  
    
      <FAQ/>
     <Footer/>
<p className="text-white text-center">All rights reserved</p>
    </main>
  )
}
