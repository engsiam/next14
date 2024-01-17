import React from 'react'

export const metadata = {
  title: 'About Page',
  description: 'This is about Page',
}


export default function AboutLayout({children}) {
  return (
    <div className='p-6'>
        <nav>Mission | Vision</nav>
        {children}
    </div>
  )
}
