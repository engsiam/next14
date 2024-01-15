import Image from 'next/image'
import React from 'react'
import loadingImage from "@/images/loading.gif"

export default function loading() {
  return (
    <div className='h-screen w-screen font-bold text-4xl text-white'>
        Loading...................
    </div>
  )
}
