import Link from 'next/link'
import { FC } from 'react'

interface IProps {
  path?: string
  title?: string
}

export const LinkWrapper: FC<IProps> = ({ children, path, title }) => {
  return (
    <Link href={path!}>
      <>{children}</>
    </Link>
  )
}
