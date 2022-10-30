import Alert from './alert'
import Footer from './footer'
import Header from './header'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="h-screen">
        {/* <Alert preview={preview} /> */}
        <Header/>
        <main>{children}</main>
        <Footer/>
      </div>
    </>
  )
}

export default Layout
