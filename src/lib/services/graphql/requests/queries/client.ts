import { gql } from "urql";

export const SUBSCRIPTION_PACKAGES = gql`
  query SubscriptionPackages {
    subscriptionPackages {
      id
      uuid
      name
      price
      storageCapacityMb
      monthlyRequests
      maxAllowedSessions
    }
  }
`;
