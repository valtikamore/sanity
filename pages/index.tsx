import type { NextPage } from 'next'
import { HomeContainer } from '../containers/Home'
import { sanityClient } from '../sanity'
import { Sanity } from '../utils/sanity'

const Home: NextPage = ({ posts }: any) => <HomeContainer posts={posts} />

const sanity = new Sanity()

export const getServerSideProps = async () => {
  const query = `*[_type == "post"] {
  _id,
  title,
  author-> {
    name,
    image
  },
  description,
  mainImage,
  slug
  }
    `
  // const posts = await sanityClient.fetch(query)

  const posts = await sanity.fetchService(query)

  return {
    props: {
      posts,
    },
  }
}

export default Home
