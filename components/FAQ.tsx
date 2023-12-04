import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

export default function FAQ(){
    return(
        <section className="grid  place-items-center gap-16 py-16 max-w-[780px] mx-auto px-10 flex items-center justify-center overflow-hidden">
        <h3 className="text-[55px] flex-1 min-[700px]:text-left text-center text-white leading-[56px]">Frequently asked questions</h3>
        <div>
        <div className='flex justify-between items-center w-full '>
          <label htmlFor="section3" className="py-[14px] px-[20px] text-white font-bold">What is Viralyst?</label>
          <span className='text-[#D05404]'><MdKeyboardArrowDown /></span>
          </div>
          <div className="py- px-[20px]">
            <p className='text-white'>
            Viralyst is an innovative committee initiated by an experienced expertise to consult a means of earning through advertisement and monetizing companies brand  
            </p>
        </div>
        <div className='flex justify-between items-center w-full '>
          <label htmlFor="section3" className="py-[14px] px-[20px] text-white font-bold ">How does viralyst work?</label>
          <span className='text-[#D05404] -rotate-90'><MdKeyboardArrowDown /></span>
          </div>
        <div className='flex justify-between items-center w-full '>
          <label htmlFor="section3" className="py-[14px] px-[20px] text-white font-bold">Is viralyst available worldwide?</label>
          <span className='text-[#D05404] -rotate-90'><MdKeyboardArrowDown /></span>
          </div>
        <div className='flex justify-between items-center w-full '>
          <label htmlFor="section3" className="py-[14px] px-[20px] text-white font-bold">How do i get started?</label>
          <span className='text-[#D05404]  -rotate-90'><MdKeyboardArrowDown /></span>
          </div>
        </div>
      </section>
    )
}