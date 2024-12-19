export function buildIpfsURL(hash: string): string {
  return `https://${process.env.NEXT_PUBLIC_PINATA_IPFS_GATEWAY}/ipfs/${hash}`;
}
