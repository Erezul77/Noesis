import { createUploader } from '@web3-storage/w3up-client';

const client = await createUploader();

export async function uploadToIPFS(content: string) {
  const blob = new Blob([content], { type: 'text/plain' });
  const cid = await client.uploadFile(blob);
  return cid.toString();
}