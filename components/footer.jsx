import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className=" p-8 px-10 md:px-16 flex md:flex-row flex-col items-center justify-between">
        <p className='text-sm text-gray-500'>© Copyright 2025. All Rights Reserved</p>
        <div className="flex items-center gap-2 ">
          <img src="/images/logo.png" className='w-8 h-8' alt="logo" />
          <p className='font-semibold'>OpnForm</p>
        </div>
        <div className="grid grid-cols-2 text-gray-500">
          <div className="flex flex-col gap-2 ">
            <a href="#">Feature Requests</a>
            <a href="#">Discord</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Report Abuse</a>
          </div>
          <div className="flex flex-col gap-2 ">
            <a href="#">Road Map </a>
            <a href="#">Technical Docs</a>
            <a href="#">terms and Conditions</a>
          </div>
        </div>
      </div>
    </div>
  )
}
