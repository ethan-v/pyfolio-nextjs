import { useEffect, useState } from "react";
import Head from "next/head";
import Container from "../../components/layout/container";
import Layout from "../../components/layout/layout";
import { PostService } from "../../lib/restapi/services/post.service";
import Link from "next/link";
import { parseViewDate } from "../../lib/helper";

const Blog = () => {

    const title = 'Blog';
    const [posts, setPosts] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        PostService.all().then((posts) => {
            setPosts(posts)
            setLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!posts) return <p>No post data</p>

    return (
        <>
            <Layout>
                <Head>
                    <title>{title}</title>
                </Head>
                <Container>
                    <h2 className="text-4xl text-center mt-4 mb-8 pt-2">Latest Posts</h2>
                    <div>
                        <ul>
                            {posts.map((post, index) => (
                                <li key={index} className="py-4">
                                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                                  <dl>
                                    <dt className="sr-only">Published on</dt>
                                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                      <time dateTime="2022-01-12T00:00:00.000Z">{parseViewDate(post.updated_at)}</time>
                                    </dd>
                                  </dl>
                                  <div className="space-y-3 xl:col-span-3">
                                    <div>
                                      <h3 className="text-2xl font-bold leading-8 tracking-tight mb-1">
                                        <Link as={`/blog/${post.slug}`} href="/blog/[slug]" className="text-gray-900 dark:text-gray-100">
                                            {post.title}   
                                        </Link>
                                      </h3>
                                      <div className="flex flex-wrap">
                                        <Link
                                          className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                          href="/tags/open-source"
                                        >
                                          open-source
                                        </Link>
                                        <Link
                                          className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                          href="/tags/musings"
                                        >
                                          python
                                        </Link>
                                        <Link
                                          className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                          href="/tags/notes"
                                        >
                                          notes
                                        </Link>
                                      </div>
                                    </div>
                                    <div className="prose text-gray-500 max-w-none dark:text-gray-400">{post.content}</div>
                                  </div>
                                </article>
                              </li>
                              
                            ))}
                        </ul>
                    </div>

                </Container>

            </Layout>
        </>
    )
}

export default Blog;