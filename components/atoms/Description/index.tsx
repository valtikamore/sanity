import { FC } from 'react'
import cn from 'classnames'

interface IProps {
  className?: string
  onClick?: () => void
}

export const Description: FC<IProps> = ({
  className,
  onClick,
  children,
  ...rest
}) => {
  return (
    <p
      className={cn('text-xl font-light text-gray-500', {
        className: className,
      })}
      onClick={onClick}
      {...rest}
    >
      {children}
    </p>
  )
}
