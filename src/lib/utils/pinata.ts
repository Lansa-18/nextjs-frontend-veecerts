/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

/**
 * Interface for the Pinata upload response
 */
interface PinataResponse {
  IpfsHash: string;
  PinSize: number;
  Timestamp: string;
  isDuplicate?: boolean;
}

/**
 * Interface for additional metadata options
 */
interface PinataMetadata {
  name?: string;
  keyvalues?: Record<string, string>;
}

/**
 * Uploads a file to IPFS using Pinata
 * @param file - File object to upload
 * @param apiKey - Your Pinata API key
 * @param apiSecret - Your Pinata API secret
 * @param metadata - Optional metadata for the file
 * @returns Promise with the Pinata response containing IPFS hash
 */
export async function uploadToPinata(
  file: File,
  metadata?: PinataMetadata
): Promise<PinataResponse> {
  try {
    // Create form data
    const formData = new FormData();
    formData.append('file', file);
    
    // Add metadata if provided
    if (metadata) {
      const metadataString = JSON.stringify({
        name: metadata.name || file.name,
        keyvalues: metadata.keyvalues || {}
      });
      formData.append('pinataMetadata', metadataString);
    }
    
    // Optional Pinata options
    const pinataOptions = JSON.stringify({
      cidVersion: 1,
      wrapWithDirectory: false
    });
    formData.append('pinataOptions', pinataOptions);
    
    // Make request to Pinata API
    const response = await axios.post(
      'https://api.pinata.cloud/pinning/pinFileToIPFS',
      formData,
      {
        headers: {
          'Content-Type': `multipart/form-data;`,
          'pinata_api_key': process.env.NEXT_PUBLIC_PINATA_API_KEY,
          'pinata_secret_api_key': process.env.NEXT_PUBLIC_PINATA_API_SECRET
        }
      }
    );
    
    return response.data;
  } catch (error) {
    const err = error as any
    console.error("Error uploading to Pinata:", error);
    throw new Error(`Failed to upload to Pinata: ${err.response?.data?.error || err.message}`);
  }
}
