import type { NextPage } from 'next'
import { HomeContainer } from '../containers/Home'
import { sanityClient } from '../sanity'
import { Sanity } from '../utils/sanity'

const Home: NextPage = ({ posts }: any) => <HomeContainer posts={posts} />

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
  const sanity = new Sanity(query)
  const posts = await sanity.fetchService()

  return {
    props: {
      posts,
    },
  }
}

export default Home
