import PostFeatured from "../post-featured"
import Post from '../../interfaces/post'
import { YoutubePlaylist } from "../../interfaces/youtube"
import Link from "next/link"
import Image from "next/image"
import circlePlayIcon from '../public/assets/icon/circle-play-regular.svg'
import { digitToDoubleCharacter } from "../../lib/helper"

type Props = {
    featuredPlaylist: YoutubePlaylist
}

const CourseDetailPreview = ({ featuredPlaylist }: Props) => {
    return (
        <>
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-8 mt-8 text-black dark:text-white">Featured Courses</h3>
            <h4 className="text-3xl md:text-3xl tracking-tight mb-4 mt-6 text-black dark:text-white">{featuredPlaylist.title}</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{featuredPlaylist.description}</p>
            {featuredPlaylist.videos.map((video, index) => (
                <Link key={index} href={video.link} target="_blank"  className="w-full">
                    <div className="w-full border-b border-gray-200 dark:border-gray-700 py-3 transform hover:scale-[1.01] transition-all">
                        <div className="flex flex-col sm:flex-row justify-between items-baseline">
                        <div className="flex items-center">
                            <div className="text-gray-500 dark:text-gray-400 text-left mr-6">{digitToDoubleCharacter(index + 1)}</div>
                            <h4 className="text-lg font-medium w-full text-gray-800 dark:text-gray-100">{video.title}</h4>
                        </div>
                        <div className="flex items-center mt-2 sm:mt-0 w-full sm:w-auto justify-between">
                            <p className="text-gray-500 dark:text-gray-400 text-left sm:text-right w-32 md:mb-0 mr-4 ml-10 sm:ml-0">{video.totalTime}</p>
                            <Image
                                src={circlePlayIcon}
                                className="w-6 h-6 rounded-full mr-2"
                                alt={video.title}
                                width={24}
                                height={24}
                            />
                        </div>
                        </div>
                    </div>
                </Link>
            ))}
            
            <a target="_blank" rel="noopener noreferrer" href={featuredPlaylist.link} className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
                Watch all videos
            </a>
        </>
    )
}

export default CourseDetailPreview
