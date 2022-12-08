import { useEffect, useState } from "react";
import Head from "next/head";
import Container from "../../components/layout/container";
import Layout from "../../components/layout/layout";
import { PostService } from "../../lib/restapi/services/post.service";
import Pagination from "../../components/pagination/pagination";
import { SearchReq } from "../../lib/restapi/models/search-request.model";
import PostPreview from "../../components/post/post-preview";

const Blog = () => {

  const title = 'Blog';
  const [posts, setPosts] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [totalPage, setTotalPage] = useState(1)
  const [page, setPage] = useState(1)
  const handleClickPage = (page: number) => {
    console.log("handleClickPage: ", page)
    setPage(page)
  }

  useEffect(() => {
    setLoading(true);
    const searchReq = new SearchReq({ page: page })
    PostService.all(searchReq).then((data) => {
      console.log("useEffect:", data)
      setPosts(data.items)
      setTotalPage(data.total_page)
      setLoading(false)
    })
  }, [page])

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
                  <PostPreview key={index} post={post} />
                </li>

              ))}
            </ul>
          </div>
          <Pagination className="text-center my-5" totalPage={totalPage} page={page} handleClick={handleClickPage} />
        </Container>
      </Layout>
    </>
  )
}

export default Blog;