import { gql } from "urql";

export const CLIENT_FOLDERS = gql`
  query ClientFolders($opts: PaginatedFolderQueryOptions, $clientUuid: ID!) {
    clientFolders(opts: $opts, clientUuid: $clientUuid) {
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

export const FOLDER = gql`
  query Folder($folderId: ID!) {
    folder(id: $folderId) {
      name
      uuid
      id
      description
    }
  }
`;

export const FOLDER_ASSETS = gql`
  query FolderAssets($folderId: ID!, $opts: PaginatedAssetQueryOptions) {
    folderAssets(folderId: $folderId, opts: $opts) {
      id
      uuid
      nftId
      name
      ipfsHash
      description
      contentType
      dateAdded
      lastUpdated
    }
  }
`;
