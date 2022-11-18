import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className=" mx-auto">
      <div dangerouslySetInnerHTML={{ __html: content }}/>
    </div>
  )
}

export default PostBody
