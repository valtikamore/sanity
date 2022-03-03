import { FC } from 'react'

interface IProps {}

export const ListItem: FC<IProps> = ({ children }) => {
  return <li>{children}</li>
}
