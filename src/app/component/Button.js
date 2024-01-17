"use client";
import React from 'react'

export default function Button() {
  return (
    <div className='mt-5'>
         <button className='p-4 bg-red-500 rounded-md' onClick={() => console.log("clicked")}>Click Here</button>
    </div>
  )
}
