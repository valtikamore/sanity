import { sanityClient } from '../../sanity'

export class Sanity {
  query: string
  constructor(query: string) {
    this.query = query
  }
  fetchService() {
    return sanityClient.fetch(this.query)
  }
}
