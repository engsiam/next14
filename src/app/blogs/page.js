import { Lemon } from 'next/font/google'
import Link from 'next/link'

export const metadata = {
  title: 'Blog Page',
  description: 'Blog description',
}

const lemon = Lemon({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  style: 'normal',
})
const blogs = [
  {
    id: 1,
    title: 'blog 10',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, odio voluptas in accusantium consequuntur veniam repellendus. Explicabo odit sunt ducimus, ad harum pariatur quidem quia accusantium necessitatibus, cupiditate maiores voluptate. Deserunt quisquam repudiandae fuga reiciendis aspernatur doloribus? Unde sit placeat rerum necessitatibus soluta sed ad quam. Dolores nemo nulla culpa.',
  },
  {
    id: 2,
    title: 'blog 2',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, odio voluptas in accusantium consequuntur veniam repellendus. Explicabo odit sunt ducimus, ad harum pariatur quidem quia accusantium necessitatibus, cupiditate maiores voluptate. Deserunt quisquam repudiandae fuga reiciendis aspernatur doloribus? Unde sit placeat rerum necessitatibus soluta sed ad quam. Dolores nemo nulla culpa.',
  },
]

export default function page() {
  return (
    <div className={lemon.className}>
      <div className="mt-10 ">
        <div className="flex gap-3 cards">
          <div className="card">
            {blogs.map((blog) => (
              <h2 className="mt-5" key={blog.id}>
                <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
              </h2>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
