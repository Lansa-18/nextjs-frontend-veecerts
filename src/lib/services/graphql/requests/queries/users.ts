import { gql } from "urql";

export const SUBSCRIPTION_PACKAGES = gql`
  query SubscriptionPackages {
    subscriptionPackages {
      __typename
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

export const USER = gql`
  query User {
    user {
      __typename
      id
      uuid
      email
      client {
        __typename
        id
        uuid
      }
      profile {
        __typename
        id
        imageHash
        uuid
        lastName
        firstName
      }
    }
  }
`;

export const CLIENT = gql`
  query Client {
    client {
      id
      uuid
      fileStorageSummary {
        audios {
          count
          totalSize
        }
        documents {
          count
          totalSize
        }
        images {
          count
          totalSize
        }
        others {
          count
          totalSize
        }
        videos {
          count
          totalSize
        }
      }
      usage {
        id
        uuid
        usedStorageMb
      }
      activeSubscription {
        id
        uuid
        amount
        subscriptionPackage {
          uuid
          id
          storageCapacityMb
          name
          price
          maxAllowedSessions
          monthlyRequests
        }
      }
    }
  }
`;
