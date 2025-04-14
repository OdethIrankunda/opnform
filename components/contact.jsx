import { MdArrowOutward } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { TbBrandDiscord } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

import React from 'react'

export default function Contact() {
  return (
    <div>
      <div className=" w-full flex flex-col items-center justify-center bg-blue-900 text-white  gap-4 py-16 px-8 md:px-24">
        <h2 className='font-bold text-3xl '>Take your forms to the next level</h2>
        <p>Generous Unlimited Plan</p>
        <a href="#" className="text-white px-4 py-2 rounded-sm bg-blue-600 flex gap-2 font-semibold ">Create a Form for Free <MdArrowOutward className="text-2xl"/>
        </a>
        <div className="flex items-center gap-4">
          <a href="#" className="text-2xl"><RiTwitterXFill />
          </a>
          <a href="#" className="text-2xl"><TbBrandDiscord />
          </a>
          <a href="#" className="text-2xl"><FaGithub />
          </a>
        </div>
        <p>The form below is an OpnForm, give it a try !</p>
        <div className="p-10 bg-white flex flex-col gap-2 text-black rounded-2xl">
          <p>If you need any help with OpnForm, if you have a question about the product, or if you just want to send us some love 💌</p>
          <label htmlFor="">Name <span className="text-red-600">*</span></label>
          <input type="text" className="border border-gray-400 px-4 py-2 rounded-xl" />
          <label htmlFor="">Email <span className="text-red-600">*</span></label>
          <input type="text" className="border border-gray-400 px-4 py-2 rounded-xl" />
          <label htmlFor="">Message <span className="text-red-600">*</span></label>
          <input type="text" className="border border-gray-400 px-4 py-8 rounded-xl" />
          <div className="flex justify-center items-center w-full flex-col pt-4">
          <a href="#" className="text-white px-4 py-2 rounded-sm bg-blue-600  gap-2 font-semibold ">Submit</a>
          <a href="#" className="text-gray-600 text-sm">Powered by <span className="font-bold">OpnForm</span></a>
          </div>
        </div>
      </div>
    </div>
  )
}
