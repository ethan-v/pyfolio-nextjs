import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import { PostService } from '../lib/restapi/services/post.service'
import { useEffect, useState } from 'react'
import PostList from '../components/post/post-list'
import CardQuickIntro from '../components/card-quick-intro/card-quick-intro'
import NewsletterForm from '../components/newsletter/newsletter-form'


export default function Index() {
  const title = `Portfolio | ${CMS_NAME}`
  const [posts, setPosts] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    PostService.all()
      .then((posts) => {
        setPosts(posts)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!posts) return <p>No menu data</p>

  return (
    <>
      <Layout>
        <Head>
          <title>{title}</title>
        </Head>
        <Container>
          <div className="flex flex-col justify-center items-start border-gray-200 dark:border-gray-700 mx-auto pb-8">
            <CardQuickIntro/>
            <PostList posts={posts} label='Latest Posts'/>
            {/* TODO: v2.x: Display list of Projects */}
          </div>
        </Container>
      </Layout>
    </>
  )
}
