import { FC } from 'react'
import { List } from '../NavList'
import { signInLinks } from '../../../data/mock'

interface IProps {
  className: string
}

export const SignIn: FC<IProps> = ({ className }) => {
  return (
    <div className={className}>
      <List items={signInLinks} className={'flex items-center space-x-5'} />
    </div>
  )
}
