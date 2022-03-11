import { FC } from 'react'
import Head from 'next/head'
import { Header } from '../../components/organisms/Header'
import { useRouter } from 'next/router'

interface IProps {}

export const SiteLayout: FC<IProps> = ({ children }) => {
  const { pathname } = useRouter()
  const styles = {
    header:
      'flex justify-center justify-between bg-red-100 px-[100px] py-[10px]',
    main: pathname.includes('post') ? 'px-0' : 'px-[100px]',
  }
  return (
    <>
      <Head>
        <title>Medium</title>
      </Head>
      <Header className={styles.header} />
      <main className={styles.main}>{children}</main>
      <footer></footer>
    </>
  )
}
