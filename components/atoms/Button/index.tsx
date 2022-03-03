import { FC } from 'react'

interface IProps {
  className?: string
  disabled?: boolean
  onClick: () => void
}

export const Button: FC<IProps> = ({
  className,
  onClick,
  disabled,
  children,
}) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
