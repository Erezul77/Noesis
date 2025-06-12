
import { createClient } from '@web3-storage/w3up-client'

const client = await createClient()

const spaceDID = process.env.WEB3_STORAGE_SPACE_DID!
const privateKey = process.env.WEB3_STORAGE_PRIVATE_KEY! // if needed
const email = process.env.WEB3_STORAGE_EMAIL!

await client.login(email)
await client.setCurrentSpace(spaceDID)

export async function uploadToIPFS(content: string): Promise<string> {
  const blob = new Blob([content], { type: 'text/plain' })
  const file = new File([blob], 'reflection.txt', { type: 'text/plain' })
  const cid = await client.uploadFile(file)
  return cid.toString()
}
