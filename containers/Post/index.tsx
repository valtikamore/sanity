import { FC } from 'react'
import { Post } from '../../components/molecules/Post'
import { SiteLayout } from '../../layouts/SiteLayout'
import { MPost } from '../../models/Entries'
import { urlFor } from '../../sanity'
import { PostProvider } from '../../utils/context'

interface IProps {
  post: MPost
}

export const PostContainer: FC<IProps> = ({ post }) => {
  return (
    <SiteLayout>
      <img
        src={urlFor(post.mainImage).url()}
        alt=""
        className={'h-40 w-full object-cover'}
      />
      <PostProvider
        avatar={urlFor(post.author.image).url()}
        timestamp={new Date(post._createdAt).toLocaleString()}
        author={post.author.name}
      >
        <Post title={post.title} description={post.description} />
      </PostProvider>
    </SiteLayout>
  )
}
