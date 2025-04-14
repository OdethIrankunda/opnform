import Header from '@/components/header'
import React from 'react'

export default function TemplatesPage() {
  const templates = [
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
        <div className="grid grid-cols-1 md:grid-cols-4 py-8">
          {
            templates.map((template) =>{
              return(
            <a href="#" className='flex flex-col gap-2'>
            <img src={template.images}  class="rounded-2xl" alt="" />
            <p className='text-gray-600'>{template.description}</p>
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
