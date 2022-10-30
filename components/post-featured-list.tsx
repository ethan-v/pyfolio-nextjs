import PostFeatured from "./post-featured"
import Post from '../interfaces/post'

type Props = {
    featuredPosts: Post[]
}

const PostFeaturedList = ({ featuredPosts }: Props) => {
    return (
        <>
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">Featured Posts</h3>
            <div className="flex gap-6 flex-col md:flex-row">
                {featuredPosts.map((post) => (
                    <PostFeatured
                        key={post.slug}
                        title={post.title}
                        coverImage={post.coverImage}
                        date={post.date}
                        author={post.author}
                        slug={post.slug}
                        excerpt={post.excerpt}
                    />
                ))}
            </div>
            <a target="_blank" rel="noopener noreferrer" href="/" className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
                Read all posts
            </a>
        </>
    )
}

export default PostFeaturedList
