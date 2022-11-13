import Head from "next/head"
import { useRouter } from "next/router"
import Container from "../components/container"
import Layout from "../components/layout"
import { ROUTES } from "../lib/constants"

const DynamicPage = () => {

    const router = useRouter()
    const query = router.query
    const slug = query?.slug
    const activeRoute = ROUTES.find((item) => item.url.replace('/', '') == slug)
    const title = activeRoute?.title || 'Page'

    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <Container>
                <h2 className="text-4xl text-center">{title}</h2>
                <div>
                    page content
                </div>
            </Container>
        </Layout>
    )
}


export default DynamicPage