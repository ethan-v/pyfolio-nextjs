import { range } from "../../lib/helper"
import styles from "./pagination.module.scss"

const Pagination = ({ totalPage, page, className = '', handleClick}) => {

    const pages = range(1, totalPage)
    const hasNextPage = page < totalPage ? '' : 'disabled'
    const hasPrevPage = page > 1 && page <= totalPage ? '' : 'disabled'
    const handleClickNext = () => {
        console.log("handleClickNext")
        if (page < totalPage){
            handleClick(page + 1)
        }
    }
    const handleClickPrev = () => {
        console.log(`handleClickPrev: page=${page}, totalPage=${totalPage}`)
        if (page > 1 && page <= totalPage){
            handleClick(page - 1)
        }
    }

    return (
        <div className={styles.Pagination}>
            <nav className={`${className} pagination`}>
                <ul className="inline-flex -space-x-px">
                    <li>
                        <a onClick={handleClickPrev} className={`${hasPrevPage} px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>Previous</a>
                    </li>
                    {pages.map(i => {
                        const active = i == page ? 'active' : ''
                        return <li key={i}>
                            <a onClick={() => handleClick(i)} className={`${active} px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>
                                {i}
                            </a>
                        </li>
                    })}
                    <li>
                        <a onClick={handleClickNext} className={`${hasNextPage} px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination