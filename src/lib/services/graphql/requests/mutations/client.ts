import { gql } from "urql";

export const CREATE_UPDATE_SUBSCRIPTION_PACKAGE = gql`
  mutation CreateUpdateSubscriptionPackage($input: SubscriptionPackageInput!) {
    createUpdateSubscriptionPackage(input: $input) {
      __typename
      id
      uuid
    }
  }
`;

export const CREATE_UPDATE_CLIENT_PACKAGE_SUBSCRIPTION = gql`
  mutation CreateUpdateClientPackageSubscription(
    $input: ClientPackageSubscriptionInput!
  ) {
    createUpdateClientPackageSubscription(input: $input) {
      id
      uuid
      __typename
    }
  }
`;
