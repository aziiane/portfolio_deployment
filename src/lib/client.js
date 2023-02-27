import { createClient } from "@sanity/client"

/*
export const cliendst = createClient({
    projectId: 'ns9z50g8',
    dataset: 'production',
    useCdn: true, // set to `true` to fetch from edge cache
    apiVersion: '2023-02-16', // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  })
*/

export const client = createClient({
  projectId: '7li2604r',
  dataset: 'production',
  apiVersion: '2023-02-16',
  useCdn: false,
})
