import { FC } from 'react'
import { Sanity } from '../../utils/sanity'
import { MPost } from '../../models/Entries'
import { GetStaticProps } from 'next'
import { PostContainer } from '../../containers/Post'

interface IProps {
  post: MPost
}
const sanity = new Sanity()

const Post: FC<IProps> = ({ post }) => <PostContainer post={post} />

export const getStaticPaths = async () => {
  const query = `*[_type == "post"] {
  _id,
  slug {
    current
  }
}
  `

  const posts = await sanity.fetchService(query)
  const paths = posts.map((post: MPost) => ({
    params: {
      slug: post.slug.current,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    author-> {
      name,
      image
    },
    description,
    mainImage,
    slug,
    body 
  }`

  const post = await sanity.fetchService(query, {
    slug: params?.slug,
  })

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post },
    // revalidate: 60
  }
}

export default Post
