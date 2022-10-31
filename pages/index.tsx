import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'
import Image from 'next/image'
import PostFeaturedPreview from '../components/post-featured'
import PostFeatured from '../components/post-featured'
import PostFeaturedList from '../components/post-featured-list'
import { YoutubePlaylist } from '../interfaces/youtube'
import YoutubePlaylistFeatured from '../components/youtube-playlist-featured'
import ProjectList from '../components/project-list'


type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const featuredPosts = allPosts.slice(0,3)
  const morePosts = allPosts.slice(1)
  const title = `Next.js Portfolio Example with ${CMS_NAME}`
  const logo = 'https://avatars.githubusercontent.com/u/101924640';
  const featuredPlaylist: YoutubePlaylist = {
    title: "Learn Python & FastAPI",
    description: "Build and deploy a modern SaaS application using Python and FastAPI. This course is 12 hours long and is comming soon...",
    link: "https://www.youtube.com/@BackendEngineer",
    videos: [
      {
        title: "Introduction to FastAPI",
        link: "/",
        totalTime: "1:02:45",
        sort: 1,
      },
      {
        title: "Working with routers and middleware",
        link: "/",
        totalTime: "30:15",
        sort: 2,
      },
      {
        title: "Database models with SQLAlschemy",
        link: "/",
        totalTime: "1:02:45",
        sort: 3,
      },
      {
        title: "Sevices, Repositories patterns",
        link: "/",
        totalTime: "45:00",
        sort: 4,
      },
      {
        title: "Deploy backend api with Gunicorn and Unicorn",
        link: "/",
        totalTime: "25:00",
        sort: 5,
      },
    ]
  }

  const projects = [
    {
      title: "Pyfolio",
      description: "Pyfolio is a Opensource Portfolio Application for developers",
      slug: "pyfolio",
      image: "/assets/images/no-image.png",
    },
    {
      title: "Pyfolio 2",
      description: "Pyfolio is a Opensource Portfolio Application for developers",
      slug: "pyfolio-2",
      image: "/assets/images/no-image.png",
    },
  ]



  return (
    <>
      <Layout>
        <Head>
          <title>{title}</title>
        </Head>
        <Container>
          <div className="flex flex-col justify-center items-start border-gray-200 dark:border-gray-700 mx-auto pb-16">
            <div className="flex flex-col-reverse sm:flex-row items-start">
              <div className="flex flex-col pr-8">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">Ethan V</h1>
                <h2 className="text-gray-700 dark:text-gray-200 mb-4">Full-stack Engineer and creator of Pyfolio
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-16">Helping developers build a faster Portfolio. Teaching about web development, backend engineering and python.</p>
              </div>
              <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
                <Image
                  src={logo}
                  alt="Ethan V"
                  sizes="30vw"
                  width={176}
                  height={176}
                  className="rounded-full filter"
                />
              </div>
            </div>
            
            <PostFeaturedList featuredPosts={featuredPosts}/>

            <YoutubePlaylistFeatured featuredPlaylist={featuredPlaylist}/>

            <ProjectList projects={projects}/>

            <span className="h-16"></span>
            <div className="border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque">
              <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">Subscribe to the newsletter</p>
              <p className="my-1 text-gray-800 dark:text-gray-200">Get emails from me about web development, tech, and early access to new articles.</p>
              <form className="relative my-4">
                <input aria-label="Email for newsletter" placeholder="tim@apple.com" type="email" autoComplete='email' required={true} className="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 pr-32" />
                <button className="flex items-center justify-center absolute right-1 top-1 px-4 pt-1 font-medium h-8 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28" type="submit">Subscribe</button>
              </form>
              <p className="text-sm text-gray-800 dark:text-gray-200">7,752 subscribers – <a href="https://www.getrevue.co/profile/leerob" target="_blank" rel="noopener noreferrer">View all issues</a>
              </p>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
