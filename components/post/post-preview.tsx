import Link from 'next/link'
import { parseViewDate } from '../../lib/helper';
import styles from './post-preview.module.scss';

const PostPreview = ({ post }) => {
  console.log("PostPreview: ", post)
  return (
    <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
      <dl>
        <dt className="sr-only">Published on</dt>
        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
          <time dateTime="2022-01-12T00:00:00.000Z">{parseViewDate(post.updated_at)}</time>
        </dd>
      </dl>
      <div className="space-y-3 xl:col-span-3">
        <div>
          <h3 className="text-2xl font-bold leading-8 tracking-tight mb-1">
            <Link as={`/blog/${post.slug}`} href="/blog/[slug]" className="text-gray-900 dark:text-gray-100">
              {post.title}
            </Link>
          </h3>
          <div className="flex flex-wrap">
            <Link
              className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              href="/tags/open-source"
            >
              open-source
            </Link>
            <Link
              className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              href="/tags/musings"
            >
              python
            </Link>
            <Link
              className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              href="/tags/notes"
            >
              notes
            </Link>
          </div>
        </div>
        <div className="prose text-gray-500 max-w-none dark:text-gray-400">{post.excerpt}</div>
      </div>
    </article>
  );
}

export default PostPreview
