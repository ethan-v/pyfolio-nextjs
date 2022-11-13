import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Container from "../../components/layout/container";
import Layout from "../../components/layout/layout";
import PostTitle from "../../components/post/post-title";
import PostBody from "../../components/post/post-body";
import DateFormatter from "../../components/custom-field/date-formatter";
import CoverImage from "../../components/custom-field/cover-image";
import { PostService } from "../../lib/restapi/services/post.service";

const Post = () => {

    const router = useRouter()
    const query = router.query
    const slug = query?.slug
    const [post, setpost] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const title = 'Portfolio'

    console.log("slug:", slug)

    useEffect(() => {
        setLoading(true);
        if (slug && !Array.isArray(slug)) {
            PostService.getBySlug(slug).then((post) => {
                setpost(post)
                setLoading(false)
            })
        }
    }, [slug])

    if (isLoading) return <p>Loading...</p>
    if (!post) return <p>No post data</p>

    return (
        <Layout>
            <Container>
                {isLoading ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                    <>
                        <article className="mb-32 mx-auto">
                            <Head>
                                <title>{post.title}</title>
                                <meta property="og:image" content={post.image} />
                            </Head>
                            {/* <PostTitle>{title}</PostTitle>
                                <div className="hidden md:block md:mb-12">
                                    <Avatar name={author.name} picture={author.picture} />
                                </div> 
                            */}
                            <div className="mb-8 md:mb-16 sm:mx-0">
                                <CoverImage title={title} src={post.image} />
                            </div>
                            <div className=" mx-auto">
                                {/* <div className="block md:hidden mb-6">
                                        <Avatar name={author.name} picture={author.picture} />
                                    </div> 
                                */}
                                <div className="mb-6 text-lg">
                                    <DateFormatter dateString={post.updated_at} />
                                </div>
                            </div>
                            {/* <PostHeader
                                title={post.title}
                                coverImage={post.coverImage}
                                date={post.date}
                                author={post.author} /> 
                            */}
                            <PostBody content={post.content} />
                        </article>
                    </>
                )}
            </Container>
        </Layout>
    )
}


export default Post;