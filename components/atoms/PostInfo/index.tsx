import { FC, useContext } from 'react'
import { LinkWrapper } from '../..'
import { Icontext, PostContext } from '../../../utils/context'

export const PostInfo = () => {
  const { avatar, timestamp, author } = useContext(PostContext) as Icontext
  return (
    <div className={'flex items-center space-x-5'}>
      <LinkWrapper path={'/'}>
        <img src={avatar} alt={author} className={'h-10 w-10 rounded-full'} />
      </LinkWrapper>
      <p>
        Blog post by <span className={'text-green-700'}>{author}</span> -
        Published at ${timestamp}
      </p>
    </div>
  )
}
