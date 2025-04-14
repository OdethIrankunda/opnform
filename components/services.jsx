import React from 'react'
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { MdNotificationsActive } from "react-icons/md";
import { PiFilesFill } from "react-icons/pi";
import { PiGearSix } from "react-icons/pi";

export default function Services() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:pt-[30%] px-8 md:px-24">
        <h2 className='text-4xl font-bold md:w-[50%]'>The easiest way to create forms.
        Generous unlimited <span className='text-blue-500'>free plan.</span></h2>
        <p className='text-gray-600 md:w-[50%] text-xl'>Need a contact form? Doing a survey? Create a form in 2 minutes and start receiving submissions.</p>
        <div className="flex items-center flex-col md:flex-row gap-4">
          <div className="md:w-[40%] flex flex-col gap-4">
          <FaRegPenToSquare className='text-blue-500 text-3xl'/>
          <h2 className='font-semibold text-2xl'>1. Create</h2>
          <p>Create a form in 2 minutes. More than 10 input types, images, logic and much more.</p>
          <div className="flex items-center gap-4">
          <FaCheck className='text-blue-500' />
            <p>Build a simple form in minutes.</p>
          </div>
          <div className="flex items-center gap-2">
          <FaCheck className='text-blue-500' />
            <p>No coding needed.</p>
          </div>
    
          </div>
          <div className="md:w-[50%] rounded-2xl overflow-hidden">
            <img src="images/step-1.jpg" alt="" />
          </div>
        </div>
        <div className="flex items-center gap-10 flex-col md:flex-row">
        <div className="md:w-[50%] rounded-2xl overflow-hidden">
            <img src="images/step-2.jpg" alt="" />
          </div>
          <div className="md:w-[40%] flex flex-col gap-4">
          <FaShareAlt className='text-blue-500 text-3xl'/>
          <h2 className='font-semibold text-2xl'>2. Share</h2>
          <p>Your form has a unique link that you can share everywhere. Send the link, or even embed the form on your website.</p>
          <div className="flex items-center gap-4">
          <FaCheck className='text-blue-500' />
            <p>Share the link to your form.</p>
          </div>
          <div className="flex items-center gap-2">
          <FaCheck className='text-blue-500' />
            <p>Embed the form on your website.</p>
          </div>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-col md:flex-row">
          <div className="md:w-[40%] flex flex-col gap-4">
          <BsGraphUp className='text-blue-500 text-3xl'/>
          <h2 className='font-semibold text-2xl'>3. Get Results</h2>
          <p>Receive your form submissions. Receive notifications, send confirmations. Export submissions and check your form analytics.</p>
          <div className="flex items-center gap-4">
          <FaCheck className='text-blue-500' />
            <p>Unlimited form submissions for free.</p>
          </div>
          <div className="flex items-center gap-2">
          <FaCheck className='text-blue-500' />
            <p>Easily export submissions as CSV.</p>
          </div>
          <div className="flex items-center gap-2">
          <FaCheck className='text-blue-500' />
            <p>Views & Submissions Analytics.</p>
          </div>
  
          </div>
          <div className="md:w-[50%] rounded-2xl overflow-hidden">
            <img src="images/step-3.jpg" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
          <MdNotificationsActive className='text-blue-500 text-3xl' />
          <p className='font-bold'>Notifications</p>
          <p>Receive notifications directly in Slack or in your mailbox whenever your from has a new submission (if you want to).</p>
          </div>
          <div className="flex flex-col gap-4">
          <PiFilesFill className='text-blue-500 text-3xl' />
          <p className='font-bold'>File Uploads</p>
          <p>Easily add file upload inputs to your forms. Uploaded files are securely stored for you. Up to 5mb!.</p>
          </div>
          <div className="flex flex-col gap-4">
          <PiGearSix className='text-blue-500 text-3xl' />
          <p className='font-bold'>Customize Everything</p>
          <p>Change form themes, change texts, colors, add images, add custom thank you pages and much more.</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}
