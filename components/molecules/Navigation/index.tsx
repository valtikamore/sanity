import { FC } from 'react'
import { navigationLinks } from '../../../data/mock'
import { List } from '../NavList'
import { LinkWrapper } from '../../atoms/LinkWrapper'

interface IProps {
  classNameNav: string
  classNameList: string
}

export const Navigation: FC<IProps> = ({ classNameNav, classNameList }) => {
  return (
    <nav className={classNameNav}>
      <LinkWrapper path={'/'}>
        <img
          src="https://links.papareact.com/yvf"
          className={'w-44 object-contain'}
          alt="sdfsdf"
        />
      </LinkWrapper>
      <List items={navigationLinks} className={classNameList} withButton />
    </nav>
  )
}
