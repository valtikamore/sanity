import { FC } from 'react'
import cn from 'classnames'

interface IProps {
  className?: string
  onClick?: () => void
}

export const Title: FC<IProps> = ({
  className,
  onClick,
  children,
  ...rest
}) => {
  return (
    <h2
      className={cn('text-3xl', {
        className: className,
      })}
      onClick={onClick}
      {...rest}
    >
      {children}
    </h2>
  )
}
