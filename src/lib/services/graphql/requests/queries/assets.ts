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
