

const NewsletterForm = ({ className = '' }) => {

    return (
        <div className={`${className} w-full`}>
            <div className="border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque">
                <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">Subscribe to the newsletter</p>
                <p className="my-1 text-gray-800 dark:text-gray-200">Get emails from me about web development, tech, and early access to new articles.</p>
                <form className="relative my-4">
                    <input aria-label="Email for newsletter" placeholder="tim@apple.com" type="email" autoComplete='email' required={true} className="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 pr-32" />
                    <button className="flex items-center justify-center absolute right-1 top-1 px-4 pt-1 font-medium h-8 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28" type="submit">Subscribe</button>
                </form>
                <p className="text-sm text-gray-800 dark:text-gray-200">7,752 subscribers – <a href="https://www.getrevue.co/profile/leerob" target="_blank" rel="noopener noreferrer">View all issues</a>
                </p>
            </div>
        </div>
    )
}

export default NewsletterForm