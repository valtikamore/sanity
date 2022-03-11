export interface MPost {
  _id: string
  _createdAt: string
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
