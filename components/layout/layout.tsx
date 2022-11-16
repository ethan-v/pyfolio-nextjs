import { useState, useEffect } from 'react'
import { MenuService } from '../../lib/restapi/services/menu.service'
import Footer from './footer'
import Header from './header'
import Meta from './meta'
import NewsletterForm from '../newsletter/newsletter-form'
import { DEFAULT_ROUTES } from '../../lib/constants'
import { Menu } from '../../lib/restapi/models/menu.model'
import { SettingService } from '../../lib/restapi/services/setting.service'

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

  const [settings, setSettings] = useState(null)
  let footerData = useState(null)

  const getFooterData = () => {
    let map = {}
    if(settings) {
      settings.map((item) => {
        map[item.key] = item;
      })
    }
    console.log("getFooterData: ", map)
    return map;
  }

  useEffect(() => {
    SettingService.all(999).then((settings) => {
      setSettings(settings)
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
        <Footer data={getFooterData()} />
      </div>
    </>
  )
}

export default Layout


