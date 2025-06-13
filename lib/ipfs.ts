import { Client } from '@web3-storage/w3up-client'
import { filesFromPath } from 'files-from-path'
import path from 'path'
import fs from 'fs'

export const client = new Client()

await client.login(process.env.WEB3_STORAGE_DID!)
await client.setCurrentSpace(process.env.WEB3_STORAGE_SPACE_DID!)

export async function uploadToIPFS(content: string) {
  const filePath = path.join('/tmp', 'reflection.txt')
  fs.writeFileSync(filePath, content)

  const files = await filesFromPath(filePath)
  const cid = await client.uploadDirectory(files)
  return cid.toString()
}
