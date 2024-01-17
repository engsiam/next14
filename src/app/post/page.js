import Link from 'next/link'
import getAllPosts from '../../../lib/getAllPosts'
export default async function page() {
  const posts = await getAllPosts()

  return (
    <div className="mt-6">
      <h2>all post Here</h2>
      <ul className="mt-6">
        {posts.map(({ id, title}) => (
          <div key={id}>
            <Link href={`/post/${id}`}>
              <h4 className="mb-5">{title}</h4>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  )
}
