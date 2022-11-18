

import Image from 'next/image'
import styles from './card-quick-intro.module.scss'

const CardQuickIntro = () => {
    const logo = 'https://avatars.githubusercontent.com/u/101924640';

    return (
        <div className={`${styles.CardQuickIntro} flex flex-col-reverse sm:flex-row items-start mt-6 mb-16`}>
            <div className="flex flex-col pr-8">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-3 text-black dark:text-white">Ethan V</h1>
                <h2 className="text-gray-700 dark:text-gray-200 mb-4 font-bold">Fullstack Software Engineer</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-16">Helping developers build a faster Portfolio. Teaching about web development, backend engineering and python.</p>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
                <Image
                    src={logo}
                    alt="Ethan V"
                    sizes="30vw"
                    width={176}
                    height={176}
                    className="rounded-full filter"
                />
            </div>
        </div>
    )
}

export default CardQuickIntro