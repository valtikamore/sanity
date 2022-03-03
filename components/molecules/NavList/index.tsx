import { ListItem } from '../../atoms/ListItem'
import { TNav } from '../../../models/Navigation'
import { LinkWrapper } from '../../atoms/LinkWrapper'
import { Button } from '../../atoms/Button'

interface IProps<T> {
  items: T[]
  children?: JSX.Element
  className?: string
  withButton?: boolean
}

export const List = <T extends TNav>({
  items,
  className,
  withButton,
}: IProps<T>) => {
  return (
    <ul className={className}>
      {items?.map((i, index) => (
        <ListItem key={index.toString()}>
          <LinkWrapper path={i.link}>{i.title}</LinkWrapper>
        </ListItem>
      ))}
      {withButton && (
        <Button className={'rounded-2xl bg-green-100 p-5'} onClick={() => {}}>
          Folow
        </Button>
      )}
    </ul>
  )
}
