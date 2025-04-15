import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import React from 'react'
import { IoIosCheckmark } from "react-icons/io";
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-8 md:py-16 gap-8 px-8 md:px-24 bg-gray-100 relative md:pb-[30%]">
        <a href="#" className='flex items-center justify-between px-4 py-2 border border-gray-300 rounded-full text-gray-500 gap-2'>
        <p className='font-semibold'>We're open source </p>
        <div className="h-4 w-0.5 bg-gray-300"></div>
        <p>start Us on Github</p>
        <MdArrowForwardIos />
        </a>
        <h1 className="md:text-5xl text-3xl font-semibold ">Build <span className="text-blue-600 "> beautiful forms</span> in seconds</h1>
        <p className="text-gray-500 md:text-2xl">Create beautiful forms and share them anywhere. It's super fast, you don't need to know how to code. Get started <span className="font-bold">for free</span>!</p>
        <Link href="/templates " className="text-white px-4 py-2 rounded-sm bg-blue-600 flex gap-2 font-semibold">Create a form for FREE <MdArrowOutward className="text-2xl"/>
        </Link>
        <div className="flex items-center gap-1">
        <IoIosCheckmark  className="text-3xl text-blue-500"/>
        <p className="text-gray-500">Unlimited Forms</p>
        <IoIosCheckmark  className="text-3xl text-blue-500"/>
        <p className="text-gray-500">Unlimited Fields</p>
        <IoIosCheckmark  className="text-3xl text-blue-500"/>
        <p className="text-gray-500">Unlimited Responses</p>
        </div>
        <div className="bg-gray-300 border border-gray-400 rounded-2xl p-4 md:w-[70%] md:absolute md:bottom-[-30%]">
          <div className="rounded-2xl border border-gray-400 overflow-hidden ">
            <img src="/images/product-cover.jpg" alt="" />
          </div>
        </div> 
      </div>
    </div>
  )
}
