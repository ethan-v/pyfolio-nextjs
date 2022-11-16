import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Container from "../components/layout/container"
import Layout from "../components/layout/layout"
import { DEFAULT_ROUTES } from "../lib/constants"
import { PageService } from "../lib/restapi/services/page.service"
import imgPageNotFound from "../public/assets/images/page-not-found.png"

const DynamicPage = () => {

    const router = useRouter()
    const query = router.query
    const slug = query?.slug || null 
    const activeRoute = DEFAULT_ROUTES.find((item) => item.url.replace('/', '') == slug)
    const title = activeRoute?.title || 'Page'
    const pageSlug = slug && slug.length !== undefined && slug.length > 0 ? slug.toString() : null;

    const [page, setPage] = useState(null)
    const [isLoading, setLoading] = useState(false)

    console.log(`Page Slug: ${pageSlug}`)

    useEffect(() => {
        setLoading(true);
        if (slug && !Array.isArray(slug)) {
            PageService.getBySlug(slug).then((page) => {
                setPage(page)
                setLoading(false)
            })
        }
    }, [slug])

    return (
        <Layout>
            <Head>
                <title>{page?.title}</title>
            </Head>
            <Container>
                <h2 className="text-4xl text-center">{page?.title}</h2>
                {page 
                    ? <div dangerouslySetInnerHTML={{ __html: page.content }}/> 
                    : <div className="mx-auto text-center my-16">
                        <Image 
                            alt="" 
                            src={imgPageNotFound}
                            className="mx-auto"
                        />
                        <div className="">
                            <h3 className="text-3xl my-8">Ops! Something went wrong.</h3>
                            <p>Brace yourself till we get the error fixed.</p>
                            <p>You may also refresh the page or try again later.</p>
                        </div>
                    </div>
                }
            </Container>
        </Layout>
    )
}


export default DynamicPage