import { gql } from "urql";

export const CREATE_UPDATE_SUBSCRIPTION_PACKAGE = gql`
  mutation CreateUpdateSubscriptionPackage($input: SubscriptionPackageInput!) {
    createUpdateSubscriptionPackage(input: $input) {
      id
      uuid
    }
  }
`;
