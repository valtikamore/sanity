import { sanityClient } from '../../sanity'

export class Sanity {
  constructor() {}
  fetchService(query: string, params?: any) {
    return sanityClient.fetch(query, params)
  }
}
