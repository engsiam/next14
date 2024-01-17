import { notFound } from 'next/navigation';
import React from 'react'
import singleBlog from '../page.js'

export default function SingleBlogPage({params}) {
  const {id} = params;
  console.log(singleBlog);
  //const {title,description} = singleBlog
  if(id==='3'){
    notFound()
  }
  return (
    <div>
       <p>This is the blog post {id}</p>
       {/* <h4>{title}</h4>
       <p>{description}</p> */}
    </div>
  )
}
