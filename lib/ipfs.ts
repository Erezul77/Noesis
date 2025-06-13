import * as w3 from '@web3-storage/w3up-client'
import { filesFromPaths } from 'files-from-path'

const spaceDID = process.env.WEB3_STORAGE_SPACE_DID!
const privateKey = process.env.WEB3_STORAGE_PRIVATE_KEY!
const email = process.env.WEB3_STORAGE_EMAIL!

const client = await w3.create()
await client.login(email)
await client.setCurrentSpace(spaceDID)

export async function pinToIPFS(filePath: string): Promise<string> {
  const files = await filesFromPaths([filePath])
  const cid = await client.uploadFile(files[0])
  return cid.toString()
}