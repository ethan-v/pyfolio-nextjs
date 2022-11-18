import Link from 'next/link'
import styles from './more-button.module.scss'

const MoreButton = ({ label, href, className }) => {
    return (
        <div className={styles.MoreButton}>
            <Link rel="noopener noreferrer" href={href} className={`${className} font-bold`}>
                {label} <span className='text-2xl'>&rarr;</span>
            </Link>
        </div>
    )
}

export default MoreButton