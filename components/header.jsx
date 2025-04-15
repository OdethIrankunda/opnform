import { MdArrowOutward } from "react-icons/md";
import { HiBars3 } from "react-icons/hi2";


import React from 'react'
import Link from "next/link";

export default function Header() {
  return (
    <div className="py-4 px-16">
      <div className="flex justify-between items-center ">
        <Link href="/" className="flex items-center gap-2 ">
          <img src="/images/logo.png" className='w-8 h-8' alt="logo" />
          <p className='font-semibold'>OpnForm</p>
        </Link>
        <div className="md:flex justify-between text-gray-500 md:items-center gap-4 text-sm hidden">
          <Link href="/templates ">Templates</Link>
          <a href="/ ">What's New?</a>
          <a href="/ ">AI Form builder</a>
          <Link href="/pricing ">Pricing</Link>
          <a href="/help ">Help</a>
          <div className="w-0.5 h-4 bg-gray-400"></div>
          <a href="/templates ">Login</a>
          <Link href="/templates " className="text-blue-700 px-4 py-2 rounded-sm border border-blue-700 flex gap-2 font-semibold">Create form <MdArrowOutward className="text-xl"/>
          </Link>
        </div>
        <HiBars3 className="text-3xl md:hidden" />
      </div>
      

    </div>
  )
}
