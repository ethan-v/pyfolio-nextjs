import { useState, useEffect } from 'react'
import { MenuService } from '../../lib/restapi/services/menu.service'
import Footer from './footer'
import Header from './header'
import Meta from './meta'
import NewsletterForm from '../newsletter/newsletter-form'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {

  const [menus, setMenus] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    MenuService.all()
      .then((menus) => {
        setMenus(menus)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!menus) return <p>No menu data</p>

  return (
    <>
      <Meta />
      <div className="h-screen">
        {/* <Alert preview={preview} /> */}
        <Header data={menus}/>
        <main>{children}</main>
        <NewsletterForm className='my-16'/>
        <Footer />
      </div>
    </>
  )
}

export default Layout


