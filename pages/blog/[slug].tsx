import { useEffect, useState } from "react";
import Head from "next/head";
import Container from "../../components/container";
import Layout from "../../components/layout";
import { PostService } from "../../lib/restapi/services/post.service";
import Link from "next/link";
import { parseViewDate } from "../../lib/helper";
import ErrorPage from 'next/error'

import PostTitle from "../../components/post-title";
import PostHeader from "../../components/post-header";
import PostBody from "../../components/post-body";
import { useRouter } from "next/router";
import DateFormatter from "../../components/date-formatter";
import CoverImage from "../../components/cover-image";

const Post = () => {

    const [post, setpost] = useState(null)
    const [isLoading, setLoading] = useState(false)

    const router = useRouter()
    const query = router.query
    const slug = query?.slug

    console.log("slug:", slug)

    // if (!router.isFallback && !post?.slug) {
    //     return <ErrorPage statusCode={404} />
    // }
    // const title = `${post?.title} | Portfolio`
    const title = 'Portfolio'



    useEffect(() => {
        setLoading(true);
        if(slug && !Array.isArray(slug)) {
            PostService.getBySlug(slug).then((post) => {
                setpost(post)
                setLoading(false)
            })
        }
    }, [slug])

    if (isLoading) return <p>Loading...</p>
    if (!post) return <p>No post data</p>

    return (
        // <>
        //     <Layout>
        //         <Head>
        //             <title>{title}</title>
        //         </Head>
        //         <Container>
        //           Post detail by slug 
        //         </Container>

        //     </Layout>
        // </>
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
                </div> */}
                <div className="mb-8 md:mb-16 sm:mx-0">
                    <CoverImage title={title} src={post.image} />
                </div>
                <div className=" mx-auto">
                    {/* <div className="block md:hidden mb-6">
                        <Avatar name={author.name} picture={author.picture} />
                    </div> */}
                    <div className="mb-6 text-lg">
                    <DateFormatter dateString={post.updated_at} />
                    </div>
                </div>
                {/* <PostHeader
                    title={post.title}
                    coverImage={post.coverImage}
                    date={post.date}
                    author={post.author}
                /> */}
                <PostBody content={post.content} />
                </article>
            </>
            )}
        </Container>
        </Layout>
    )
}


type Params = {
  params: {
    slug: string
  }
}

// export async function getStaticProps({ params }: Params) {
// //   const post = getPostBySlug(params.slug, [
// //     'title',
// //     'date',
// //     'slug',
// //     'author',
// //     'content',
// //     'ogImage',
// //     'coverImage',
// //   ])
// //   const content = await markdownToHtml(post.content || '')

//   return {
//     props: {
//       slug: params.slug,
//     },
//   }
// }

// export async function getStaticPaths() {
//   return {
//     paths: {
//         params: {
//           slug: post.slug,
//         },
//       },
//     fallback: false,
//   }
// }

export default Post;