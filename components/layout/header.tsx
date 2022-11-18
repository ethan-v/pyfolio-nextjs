import Link from 'next/link'
import { DEFAULT_ROUTES } from '../../lib/constants';

const Header = ({ data }) => {
  const menu = DEFAULT_ROUTES

  return (
    <div className="container mx-auto">
      <nav className="flex items-center justify-between w-full relative border-gray-200 dark:border-gray-700 mx-auto pt-6 pb-6 sm:pb-6 text-gray-900 bg-gray-50 dark:bg-gray-800 bg-opacity-60 dark:text-gray-100">
        <h2 className=" text-primary text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-6 mt-6">
          <Link href="/" className="hover:underline">
            Portfolio
          </Link>
          .
        </h2>
        <div className="ml-[-0.60rem]">
          {menu.map((item, index) => (
            <Link key={index} href={item.url} className="font-normal text-gray-600 dark:text-gray-400 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all">
              <span className="capsize">{item.title}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Header
