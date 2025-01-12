import { gql } from "urql";

export const CLIENT_FOLDERS = gql`
  query ClientFolders($opts: PaginatedFolderQueryOptions) {
    clientFolders(opts: $opts) {
      __typename
      id
      name
      logoHash
      uuid
      description
      dateAdded
      totalSize
      itemsCount
    }
  }
`;

export const CLIENT_FOLDER = gql`
  query ClientFolder($folderId: ID!) {
    clientFolder(id: $folderId) {
      name
      uuid
      id
      description
    }
  }
`;

export const CLIENT_FOLDER_ASSETS = gql`
  query ClientFolderAssets($folderId: ID!, $opts: PaginatedAssetQueryOptions) {
    clientFolderAssets(folderId: $folderId, opts: $opts) {
      id
      uuid
      nftId
      name
      ipfsHash
      description
      contentType
      dateAdded
      lastUpdated
      sizeMb
    }
  }
`;


export const CLIENT_ASSETS = gql`
  query ClientAssets($opts: PaginatedAssetQueryOptions) {
    clientAssets(opts: $opts) {
      id
      uuid
      nftId
      name
      ipfsHash
      description
      contentType
      dateAdded
      lastUpdated
      sizeMb
    }
  }
`;
