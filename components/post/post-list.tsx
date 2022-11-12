import { Post } from "../../lib/restapi/models/post.model"
import MoreButton from "../more-button/more-button"
import PostPreview from "./post-preview"

type Props = {
    label: string
    posts: Post[]
}

const PostList = ({ posts, label = 'New Posts' }: Props) => {
    
    return (
        <>
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-8 text-black dark:text-white">{label}</h3>
            <ul>
            {posts.map((post, index) => (
                <li key={index} className="py-4">
                <PostPreview key={index} post={post} />
                </li>
            ))}
            </ul>
            <MoreButton label="Read all post" href='/blog' className='text-brand' />
        </>
    )
}

export default PostList
