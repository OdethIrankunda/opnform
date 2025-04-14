import React from 'react'
import { TbLogicNor } from "react-icons/tb";
import { FaEyeSlash } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
import { IoMdLock } from "react-icons/io";
import { FaRegCalendar } from "react-icons/fa";
import { RiHashtag } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import { PiWebhooksLogo } from "react-icons/pi";
import { TbHexagonalPyramid } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

export default function MoreFeatures() {
  return (
    <div>
      <div className="w-full flex flex-col items-center justify-center py-16 px-8 md:px-24">
        <h1 className='font-bold text-2xl'>And many more features</h1>
        <p className='text-gray-600'>OpnForm makes form building easy and comes with powerful features.</p>

        <div className="grid md:grid-cols-3 grid-cols-1 py-8 w-full">
          <div className="flex flex-col gap-4">
            <div className="flex  items-center gap-2">
            <IoMdLock className='text-blue-600 text-2xl'/> 
            <p>Form password</p>
            </div>
            <div className="flex  items-center gap-2">
            <FaEyeSlash className='text-blue-600 text-2xl'/> 
            <p>Hidden fields</p>
            </div>
            <div className="flex  items-center gap-2">
            <FaCode className='text-blue-600 text-2xl'/> 
            <p>Custom code</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex  items-center gap-2">
            <TbLogicNor className='text-blue-600 text-2xl'/> 
            <p>Form Logic</p>
            </div>
            <div className="flex  items-center gap-2">
            <IoGlobeOutline className='text-blue-600 text-2xl'/> 
            <p>URL pre-fill</p>
            </div>
            <div className="flex  items-center gap-2">
            <FaRegCalendar className='text-blue-600 text-2xl'/> 
            <p>Closing date</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex  items-center gap-2">
            <RiHashtag className='text-blue-600 text-2xl'/> 
            <p>Unique submission ID</p>
            </div>
            <div className="flex  items-center gap-2">
            <PiWebhooksLogo className='text-blue-600 text-2xl'/> 
            <p>Webhooks</p>
            </div>
            <div className="flex  items-center gap-2">
            <TbGridDots className='text-blue-600 text-2xl'/> 
            <p>And much more...</p>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 rounded-2xl p-2 md:flex w-full">
          <div className="p-8 md:w-[60%] flex flex-col gap-2">
            <h2 className='text-3xl flex gap-2 font-semibold'>Check out our  <span className='text-blue-600 flex gap-2'><TbHexagonalPyramid  className='hidden md:block'/> Pro Features</span></h2>
            <p className='text-gray-600'>OpnForm Pro offers empowering features tailored to the advanced needs of teams and creators. Enjoy our free 3-day trial!</p>
            <div className="flex text-gray-400 items-center">
              <p className=''>WHAT'S INCLUDED</p>
              <div className="w-[50%] h-0.5 bg-gray-300"></div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                <FaCheck className='text-2xl text-blue-600'/>
                  <p>Form confirmation emails</p>
                </div>
                <div className="flex items-center gap-2">
                <FaCheck className='text-2xl text-blue-600'/>
                  <p>Discord notifications</p>
                </div>
                <div className="flex items-center gap-2">
                <FaCheck className='text-2xl text-blue-600'/>
                  <p>1 Custom domain</p>
                </div>
                <div className="flex items-center gap-2">
                <FaCheck className='text-2xl text-blue-600'/>
                  <p>Larger file uploads (50mb)</p>
                </div>
                <div className="flex items-center gap-2">
                <FaCheck className='text-2xl text-blue-600'/>
                  <p>Priority support</p>
                </div>
                <div className="flex items-center gap-2">
                <FaCheck className='text-2xl text-blue-600'/>
                  <p>Custom sender email (SMTP)</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                <FaCheck className='text-2xl text-blue-600'/>
                  <p>Slack notifications</p>
                </div>
                <div className="flex items-center gap-2">
                <FaCheck className='text-2xl text-blue-600'/>
                  <p>Editable submissions</p>
                </div>
                <div className="flex items-center gap-2">
                <FaCheck className='text-2xl text-blue-600'/>
                  <p>Custom code</p>
                </div>
                <div className="flex items-center gap-2">
                <FaCheck className='text-2xl text-blue-600'/>
                  <p>Remove OpnForm branding</p>
                </div>
                <div className="flex items-center gap-2">
                <FaCheck className='text-2xl text-blue-600'/>
                  <p>Form Analytics</p>
                </div>
                <a href="/pricing">Read more about our pricing</a>
              </div>
            </div>
          </div>
          <div className="p-8 md:w-[40%] flex flex-col items-center justify-center rounded-2xl bg-gray-100 gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 ">
                <button className='cursor-pointer bg-white rounded-2xl p-2'>Monthly</button>
                <button className='cursor-pointer rounded-2xl bg-gray-200 p-2'>Yearly</button>
              </div>
              <p  className='text-green-700'>Save 20% </p>
            </div>
            <div className="">
              <p className='font-bold text-3xl'>$19</p>
              <p>per month</p>
            </div>
            <a href="/templates " className="text-white px-4 py-2 rounded-sm bg-blue-600 flex gap-2 font-semibold ">Start free Trial <MdArrowOutward className="text-2xl"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
