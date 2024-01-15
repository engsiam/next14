import Image from 'next/image'
import React from 'react'
import loadingImage from "@/images/loading.gif"

export default function loading() {
  return (
    <div className='h-screen w-screen font-bold text-4xl'>
        <Image src={loadingImage} alt="loading" width={150} height={150}/>
    </div>
  )
}
