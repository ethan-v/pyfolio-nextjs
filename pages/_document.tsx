import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head />
      <body className="dark:bg-gray-800">
        <div className="max-w-screen-md mx-auto px-5">
          <Main/>
          <NextScript />
        </div>
      </body>
    </Html>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}