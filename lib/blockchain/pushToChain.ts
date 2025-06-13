import { ethers } from 'ethers'
import { contractABI, contractAddress } from './contractDetails'

export async function pushToChain(ipfsHash: string, adequacy: number) {
  const provider = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_RPC_URL)
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider)
  const contract = new ethers.Contract(contractAddress, contractABI, wallet)

  const tx = await contract.submitReflection(ipfsHash, adequacy)
  await tx.wait()
}
