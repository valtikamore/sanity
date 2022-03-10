export interface Post {
  _id: string
  author: {
    image: null | string
    name: string
  }
  description: null | string
  mainImage: null | string
  slug: {
    _type: string
    current: string
  }
  title: string
}
