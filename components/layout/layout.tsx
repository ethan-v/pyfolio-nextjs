import { useState, useEffect } from 'react'
import { MenuService } from '../../lib/restapi/services/menu.service'
import Footer from './footer'
import Header from './header'
import Meta from './meta'
import NewsletterForm from '../newsletter/newsletter-form'
import { DEFAULT_ROUTES } from '../../lib/constants'
import { Menu } from '../../lib/restapi/models/menu.model'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {

  const [menus, setMenus] = useState(DEFAULT_ROUTES)
  const [isLoading, setLoading] = useState(false)
  const defaultMenu = DEFAULT_ROUTES.map((item) => {
    return new Menu(item);
  })

  useEffect(() => {
    setLoading(true);
    MenuService.all()
      .then((menus) => {
        setMenus(defaultMenu.concat(menus))
        setLoading(false)
      })
    
    // setMenus(DEFAULT_ROUTES)
    setLoading(false)
  }, [defaultMenu])

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


