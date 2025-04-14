import React from 'react'
import { BsStars } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
export default function Openai() {
  return (
    <div>
      <div className="bg-blue-200 rounded-2xl p-8 md:p-16  m-8 flex flex-col gap-4">
          <div className="flex md:flex-row flex-col ">
            <div className=" flex flex-col gap-4 items-start">
            <div className="text-blue-700 px-4 py-2 border border-blue-200 flex gap-2 font-semibold bg-white rounded-full text-sm"><BsStars className='text-xl'/>
          Introducing OpnForm AI </div>
          <h1 className='md:text-5xl text-3xl font-bold '>Say goodbye to tedious form building with OpnForm's new
          <span className='text-blue-500'>AI-powered feature!</span></h1>
          <p className='text-gray-600'>Easily generate a fully working form in seconds with just a simple description.</p>
          <a href="/templates " className="text-white px-4 py-2 rounded-sm bg-blue-600 flex gap-2 font-semibold">Try our free form builder <MdArrowOutward className="text-2xl"/>
          </a>
            </div>
            <div className="flex rounded-2xl overflow-hidden">
              <img src="/images/ai-feature-illustration.png"  className="w-full" alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}
