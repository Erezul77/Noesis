// lib/ipfs.ts
import * as W3 from '@web3-storage/w3up-client'
import { filesFromPaths } from 'files-from-path'

export const client = await W3.create()

await client.login(process.env.WEB3_STORAGE_DID!)
await client.setCurrentSpace(process.env.WEB3_STORAGE_SPACE_DID!)

export async function storeReflection(content: string) {
  const file = new File([content], 'reflection.txt', { type: 'text/plain' })
  const cid = await client.uploadFile(file)
  console.log('Stored to IPFS with CID:', cid)
  return cid.toString()
}
