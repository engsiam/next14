import getSinglePost from '../../../../lib/getSinglePost'

export default async function PostPage({ params }) {
  const { id } = params
  const singlePost = await getSinglePost(id)
  const { title, body } = singlePost
  return (
    <div className="mt-6">
      <h2>This is the blog post {id}</h2>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  )
}
