
import { ethers } from 'ethers'

const contractAddress = process.env.REFLECTION_VAULT_CONTRACT!
const contractABI = [
  "function submitReflection(string memory ipfsHash, uint256 adequacyScore) public"
]

export async function pushToChain(ipfsHash: string, adequacy: number) {
  const provider = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_RPC_URL)
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider)
  const contract = new ethers.Contract(contractAddress, contractABI, wallet)

  const tx = await contract.submitReflection(ipfsHash, Math.floor(adequacy * 1000))
  await tx.wait()
  console.log('Reflection submitted on-chain:', tx.hash)
}
