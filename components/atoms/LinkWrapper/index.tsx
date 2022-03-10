import Link from 'next/link'
import { FC } from 'react'

interface IProps {
  path?: string
  className?: string
}

export const LinkWrapper: FC<IProps> = ({ children, path, className }) => {
  return (
    <Link href={path!}>
      <a className={className}>{children} </a>
    </Link>
  )
}
