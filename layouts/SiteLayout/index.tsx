import { FC } from 'react'
import Head from 'next/head'
import { Header } from '../../components/organisms/Header'

interface IProps {}

export const SiteLayout: FC<IProps> = ({ children }) => {
  const styles = {
    header:
      'flex justify-center justify-between bg-red-100 px-[100px] py-[10px]',
    main: 'px-[100px]',
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
