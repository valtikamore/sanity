import { FC } from 'react'
import { SiteLayout } from '../../layouts/SiteLayout'

interface IProps {}

export const HomeContainer: FC<IProps> = () => {
  return (
    <SiteLayout>
      <div>main</div>
    </SiteLayout>
  )
}
