import Image from 'next/image';
import Link from 'next/link'
import darkModeIcon from '../public/assets/icon/moon-regular.svg'

const Header = () => {
  const menu = [
    {
      title: 'Home',
      route: '/'
    },
    {
      title: 'Blog',
      route: '/'
    },
    {
      title: 'Snippets',
      route: '/'
    },
    {
      title: 'About',
      route: '/'
    },
  ]
  return (
    <div className="container mx-auto">
      <nav className="flex items-center justify-between w-full relative border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16 text-gray-900 bg-gray-50 dark:bg-gray-800 bg-opacity-60 dark:text-gray-100">
        <h2 className=" text-primary text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-8 mt-8">
          <Link href="/" className="hover:underline">
            Portfolio
          </Link>
          .
        </h2>
        <div className="ml-[-0.60rem]">
          {/* <button
            className="mobile-menu_burger__wvd0z visible md:hidden"
            aria-label="Toggle menu"
            type="button"
          >
            <Image
              src={darkModeIcon}
              className="w-6 h-6 rounded-full"
              alt="Dark mode view"
              width={24}
              height={24}
            />
          </button> */}
          {menu.map((item, index) => (
            <a key={index} href={item.route} className="font-normal text-gray-600 dark:text-gray-400 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all">
              <span className="capsize">{item.title}</span>
            </a>
          ))}
          
        </div>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all"
        >
          <Image
              src={darkModeIcon}
              className="w-6 h-6 rounded-full"
              alt="Dark mode view"
              width={150}
              height={150}
            />
        </button>
      </nav>
    </div>
  );
}

export default Header
