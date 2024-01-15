import React from 'react'

export default function AboutLayout({children}) {
  return (
    <div className='p-6'>
        <nav>Mission | Vision</nav>
        {children}
    </div>
  )
}
