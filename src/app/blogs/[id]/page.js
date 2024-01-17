import { notFound } from 'next/navigation';
import React from 'react'

export default function SingleBlogPage({params}) {
  const {id} = params;
  if(id==='3'){
    notFound()
  }
  return (
    <div>
       <p>This is the blog post {id}</p>
    </div>
  )
}
