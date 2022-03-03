import { FC } from 'react'
import { Navigation } from '../../molecules/Navigation'
import { SignIn } from '../../molecules/SignIn'

interface IProps {
  className?: string
}

export const Header: FC<IProps> = ({ className }) => {
  return (
    <header className={className}>
      <Navigation
        classNameNav={'flex '}
        classNameList={'hidden items-center space-x-5 md:flex'}
      />
      <SignIn className={'flex'} />
    </header>
  )
}
