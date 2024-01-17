import getAllPosts from '../../../lib/getAllPosts'
import React from 'react'
export default async function page() {
  const posts = await getAllPosts()

  return (
    <div className="mt-6">
      <h2>all post Here</h2>
      <ul className="mt-6">
        {posts.map((post) => (
          <div key={post.id}>
            <h4 className="mb-5">{post.title}</h4>
            <p className="mt-5"> {post.body}</p>
          </div>
        ))}
      </ul>
    </div>
  )
}
