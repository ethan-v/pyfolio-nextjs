import Image, { StaticImageData } from 'next/image';
import Link from 'next/link'
import iconYoutube from '../../public/assets/icon/youtube-48.png'
import iconTwitter from '../../public/assets/icon/twitter-48.png'
import iconGithub from '../../public/assets/icon/github-48.png'

type FooterLink = {
  title: string;
  url: string;
  target: string;
  icon?: StaticImageData;
}

type FooterLinkGroup = {
  group: string;
  links: Array<FooterLink>;
}

const Footer = ({ data }) => {

  const footerLinks: Array<FooterLinkGroup> = [
    {
      group: 'information',
      links: [
        {
          title: 'Home',
          url: '/',
          target: '',
        },
        {
          title: 'About me',
          url: '/about-me',
          target: '',
        },
        {
          title: 'Newsletter',
          url: '#newsletter',
          target: '',
        },
      ]
    },
    {
      group: 'social',
      links: [
        {
          title: 'Twitter',
          url: 'https://twitter.com/',
          target: '_blank',
          icon: iconTwitter
        },
        {
          title: 'GitHub',
          url: data?.github_url?.value || 'https://github.com',
          target: '_blank',
          icon: iconGithub,
        },
        {
          title: 'YouTube',
          url: data?.youtube_url?.value || 'https://www.youtube.com',
          target: '_blank',
          icon: iconYoutube
        },
      ]
    },
    {
      group: 'Projects',
      links: [
        {
          title: 'Project 1',
          url: 'https://github.com',
          target: '_blank',
        },
        {
          title: 'Project 3',
          url: 'https://github.com',
          target: '_blank',
        },
        {
          title: 'Project 2',
          url: 'https://github.com',
          target: '_blank',
        },
      ]
    }
  ];

  console.log("Footer Links: ", footerLinks)

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
              <Link key={index} href={link.url} target={link.target} className="flex flex-row leading-8">
                {link.icon && <Image className='mr-3' alt={link.title} src={link.icon} width={30} height={30}/>}
                <span className='leading-8'>{link.title}</span>
              </Link>
            ))}
          </div>)
        )}
      </div>
    </footer>
  )
}


export default Footer