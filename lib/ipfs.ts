
import * as w3up from '@web3-storage/w3up-client';

let client: any;

export async function initIPFS() {
  if (!client) {
    client = await w3up.create();
    const space = await client.login(process.env.WEB3_STORAGE_EMAIL!);
    await client.setCurrentSpace(space.did());
  }
  return client;
}

export async function uploadToIPFS(content: string): Promise<string> {
  const client = await initIPFS();
  const blob = new Blob([content], { type: 'text/plain' });
  const cid = await client.uploadFile(blob);
  return `ipfs://${cid}`;
}
