import { FC } from 'react'
import { Title } from '../../atoms/Title'
import { Description } from '../../atoms/Description'
import { PostInfo } from '../../atoms/PostInfo'

interface IProps {
  title: string
  description?: string | null
}

export const Post: FC<IProps> = ({ title, description }) => {
  return (
    <article className={'mx-auto max-w-3xl'}>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
      <PostInfo />
    </article>
  )
}
