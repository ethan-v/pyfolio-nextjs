import Image from 'next/image'
import Link from 'next/link'
import arrowRightIcon from '../public/assets/icon/arrow-right.svg'

type Props = {
  title: string
  slug: string
  image: string
  description: string
}

const ProjectItem = ({
  title,
  slug,
  description,
  image,
}: Props) => {
  return (
    <>
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <Link as={`/projects/${slug}`} href="/projects/[slug]">
            <Image
                src={image}
                className="block h-150 w-full object-cover object-center cursor-pointer"
                alt={title}
                width={300}
                height={300}
                // fill={true}
                style={{maxHeight: '250px'}}
              />
          </Link>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            <Link href="#" className="text-white inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <Image
                src={arrowRightIcon}
                className="w-4 h-4 rounded-full mr-4 text-white ml-2"
                alt={title}
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
    </>
  );
}

export default ProjectItem
