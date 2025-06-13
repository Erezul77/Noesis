import { create } from '@web3-storage/w3up-client'
import { StoreMemory } from '@web3-storage/access/stores/memory'
import { importDID } from 'w3up-client/utils'

const client = await create({ store: new StoreMemory() })

const DID = process.env.WEB3_STORAGE_DID!
const SPACE_DID = process.env.WEB3_STORAGE_SPACE_DID!

await client.setCurrentDID(await importDID(DID))
await client.setCurrentSpace(SPACE_DID)

export async function uploadToIPFS(file: File): Promise<string> {
  const fileCid = await client.uploadFile(file)
  return `ipfs://${fileCid}`
}
