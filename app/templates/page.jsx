import Header from '@/components/header'
import React from 'react'

export default function TemplatesPage() {
  const templates = [
    {
      images:"/images/template1.png",
      title:"Legal Petition Form Template",
      description:"Streamline the process of creating and submitting legal petitions with our easy-to-use Legal Petition Form template."
    },
    {
      images:"/images/template2.jfif",
      title: "International Job Application Form Template",
      description:"An international job application form supporting right-to-left text for multilingual accessibility."
    },
    {
      images:"/images/template3.jfif",
      title: "Training Feedback Survey Template",
      description:"A structured feedback form for evaluating training sessions using a matrix-style rating system."
    },
    {
      images:"/images/template4.jfif",
      title: "Environmental Petition Form Template",
      description:"Use this Environmental Petition Form to gather support and signatures for environmental causes and initiatives."
    },
    {
      images:"/images/template5.jfif",
      title: "Political Petition Form Template",
      description:"Collect signatures and support for your political cause efficiently with this streamlined Political Petition Form."
    },
    {
      images:"/images/template6.jfif",
      title: "DISC Survey Form Template",
      description:"Capture insightful personality traits with our DISC survey form, designed for easy understanding and assessment of behavior styles."
    },
    {
      images:"/images/template7.jfif",
      title: "MBTI Assessment Form Template",
      description:"Discover your personality type with our MBTI Assessment Form, designed to explore your preferences in how you perceive the world and make decisions."
    },
    {
      images:"/images/template8.jfif",
      title: "Garbage Collection Form Template",
      description:"Easily organize waste collection with this straightforward form designed to gather all necessary garbage details."
    },
    {
      images:"/images/template9.jfif",
      title: "Software License Request Form Template",
      description:"Streamline software license requests with our efficient online form template."
    },
    {
      images:"/images/template10.jfif",
      title: "IT Training Registration Form Template",
      description:"Register for IT training courses with this simple and user-friendly online form."
    },
    {
      images:"/images/template11.jfif",
      title: "Cybersecurity Incident Report Form Template",
      description:"Report and document cybersecurity incidents easily with our Cybersecurity Incident Report Form template."
    },
    {
      images:"/images/template12.jfif",
      title: "Network Access Request Form Template",
      description:"Effortlessly request and manage network access with our streamlined form template."
    },
    {
      images:"/images/template1.png",

      description:"Streamline the process of creating and submitting legal petitions with our easy-to-use Legal Petition Form template."
    },
    {
      images:"/images/template1.png",
      description:"Streamline the process of creating and submitting legal petitions with our easy-to-use Legal Petition Form template."
    },
    {
      images:"/images/template1.png",
      description:"Streamline the process of creating and submitting legal petitions with our easy-to-use Legal Petition Form template."
    },
    {
      images:"/images/template1.png",
      description:"Streamline the process of creating and submitting legal petitions with our easy-to-use Legal Petition Form template."
    },
    {
      images:"/images/template1.png",
      description:"Streamline the process of creating and submitting legal petitions with our easy-to-use Legal Petition Form template."
    },
    {
      images:"/images/template1.png",
      description:"Streamline the process of creating and submitting legal petitions with our easy-to-use Legal Petition Form template."
    },
    {
      images:"/images/template1.png",
      description:"Streamline the process of creating and submitting legal petitions with our easy-to-use Legal Petition Form template."
    },
    {
      images:"/images/template1.png",
      description:"Streamline the process of creating and submitting legal petitions with our easy-to-use Legal Petition Form template."
    },
    {
      images:"/images/template1.png",
      description:"Streamline the process of creating and submitting legal petitions with our easy-to-use Legal Petition Form template."
    },
    {
      images:"/images/template1.png",
      description:"Streamline the process of creating and submitting legal petitions with our easy-to-use Legal Petition Form template."
    },
    {
      images:"/images/template1.png",
      description:"Streamline the process of creating and submitting legal petitions with our easy-to-use Legal Petition Form template."
    },
  ]
  return (
    <div>
      <Header/>
      <hr className='text-gray-300'/>
      <div className="flex flex-col justify-center items-center gap-4 md:py-16 py-8">
        <h2 className='text-3xl font-bold'>Form Templates</h2>
        <p className='text-xl text-gray-600'>Our collection of beautiful templates to create your own forms!</p> 
        </div>
      <hr className='text-gray-300'/>
      <div className="P-8 md:p-16">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <select name=""  className='px-6 py-3 border border-gray-200 rounded-xl text-gray-600' id=""> 
              <option value="">All Types</option>
              <option value="">Order Forms</option>
              <option value="">Registration Forms</option>
              <option value="">Event Registration Forms</option>
              <option value="">Payment Forms</option>
            </select>
            <select name=""  className='px-6 py-3 border border-gray-200 rounded-xl text-gray-600' id=""> 
              <option value="">All Industries</option>
              <option value="">Order Forms</option>
              <option value="">Registration Forms</option>
              <option value="">Event Registration Forms</option>
              <option value="">Payment Forms</option>
            </select>
          </div>
          <button className='px-4 w-xl flex items-start py-3 text-gray-600 border border-gray-300 rounded-xl '>Search ...</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 py-8 gap-4">
          {
            templates.map((template) =>{
              return(
            <a href="#" className='flex flex-col gap-2 '>
            <div className="rounded-2xl overflow-hidden w-full h-[50%] bg-amber-400"><img src={template.images}  class="h-full w-full object-cover" alt="" /></div>
            <h2 className='font-semibold text-xl'>{template.title}</h2>
            <p className='text-gray-600 text-sm'>{template.description}</p>
            <div className="flex items-center gap-2">
            <button className='text-gray-600 text-sm bg-gray-300 px-4 py-2 rounded-full'>Petion Forms +1</button>
            <button className='text-blue-600 text-sm bg-gray-300 px-4 py-2 rounded-full'>Petion Forms +2</button>
            </div>
          </a>
              );
            })
          }
        </div>
      </div>
    </div>
  )
}
