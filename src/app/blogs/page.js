import Link from 'next/link'
const blogs = [
  {
    id: 1,
    title: 'blog 10',
    description: 'description 1',
  },
  { id: 2, title: 'blog 2', description: 'description 2' },
]

export default function page() {
  return (
    <div className="mt-10">
      <div className="flex gap-3 cards">
        <div className="card">
          {blogs.map((blog) => (
            <h2 key={blog.title}>
              <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
            </h2>
          ))}
        </div>
      </div>
    </div>
  )
}
