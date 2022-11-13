import Link from 'next/link'

type FooterLink = {
  title: string;
  url: string;
}

type FooterLinkGroup = {
  group: string;
  links: Array<FooterLink>;
}

const Footer = () => {

  const footerLinks: Array<FooterLinkGroup> = [
    {
      group: 'information',
      links: [
        {
          title: 'Home',
          url: '/'
        },
        {
          title: 'About',
          url: '/about'
        },
        {
          title: 'Newsletter',
          url: '/newsletter'
        },
      ]
    },
    {
      group: 'social',
      links: [
        {
          title: 'Twitter',
          url: 'https://twitter.com/'
        },
        {
          title: 'GitHub',
          url: 'https://github.com'
        },
        {
          title: 'YouTube',
          url: 'https://www.youtube.com'
        },
      ]
    },
    {
      group: 'Projects',
      links: [
        {
          title: 'Project 1',
          url: 'https://github.com'
        },
        {
          title: 'Project 3',
          url: 'https://github.com'
        },
        {
          title: 'Project 2',
          url: 'https://github.com'
        },
      ]
    }
  ];

  return (
    <footer className="flex flex-col justify-center items-start mx-auto w-full my-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <h2 className="text-primary text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-8 mt-8">
          <Link href="/" className="hover:underline">
            Portfolio
          </Link>
          .
        </h2>
      <div className="w-full grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        {footerLinks.map((linkGroup, indexGroup) => (
          <div className="flex flex-col space-y-4" key={indexGroup}>
            {linkGroup.links.map((link, index) => (
              <Link key={index} href={link.url}>{link.title}</Link>
            ))}
          </div>)
        )}
      </div>
    </footer>
  )
}


export default Footer