import { JsonRpcProvider } from 'ethers'
import { Wallet, Contract } from 'ethers'
import contractABI from './contractABI.json'

const contractAddress = process.env.REFLECTION_VAULT_CONTRACT!

export async function pushToChain(ipfsHash: string, adequacy: number) {
  const provider = new JsonRpcProvider(process.env.ALCHEMY_RPC_URL)
  const wallet = new Wallet(process.env.PRIVATE_KEY!, provider)
  const contract = new Contract(contractAddress, contractABI, wallet)

  const tx = await contract.submitReflection(ipfsHash, adequacy)
  await tx.wait()
}
