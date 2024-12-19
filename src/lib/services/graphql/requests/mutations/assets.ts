import { gql } from "urql";

export const CREATE_UPDATE_FOLDER = gql`
  mutation CreateUpdateFolder($input: FolderInput!) {
    createUpdateFolder(input: $input) {
      __typename
      id
      uuid
    }
  }
`;
