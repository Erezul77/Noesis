import { JsonRpcProvider } from 'ethers/providers';
import { Wallet, Contract } from 'ethers';
import contractABI from './contractABI.json';

const contractAddress = process.env.CONTRACT_ADDRESS!;

export async function pushToChain(ipfsHash: string, adequacy: number) {
  const provider = new JsonRpcProvider(process.env.ALCHEMY_RPC_URL);
  const wallet = new Wallet(process.env.PRIVATE_KEY!, provider);
  const contract = new Contract(contractAddress, contractABI, wallet);
  await contract.submitReflection(ipfsHash, adequacy);
}