import Head from "next/head"
import { useRouter } from "next/router"
import Container from "../components/layout/container"
import Layout from "../components/layout/layout"
import { DEFAULT_ROUTES } from "../lib/constants"

const DynamicPage = () => {

    const router = useRouter()
    const query = router.query
    const slug = query?.slug
    const activeRoute = DEFAULT_ROUTES.find((item) => item.url.replace('/', '') == slug)
    const title = activeRoute?.title || 'Page'

    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <Container>
                <h2 className="text-4xl text-center">{title}</h2>
                <div>
                    The page content
                </div>
            </Container>
        </Layout>
    )
}


export default DynamicPage