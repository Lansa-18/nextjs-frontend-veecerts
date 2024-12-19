import { gql } from 'urql';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Upload: { input: any; output: any; }
};

export type AssetInput = {
  description: Scalars['String']['input'];
  file: Scalars['Upload']['input'];
  folderId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  uuid?: InputMaybe<Scalars['ID']['input']>;
};

export type AssetType = {
  __typename?: 'AssetType';
  dateAdded: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  ipfsHash: Scalars['String']['output'];
  lastUpdated: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nftId: Scalars['Int']['output'];
  uuid: Scalars['String']['output'];
};

export type AuthTokenType = {
  __typename?: 'AuthTokenType';
  dateAdded: Scalars['String']['output'];
  expiresAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  refreshToken: Scalars['String']['output'];
  token: Scalars['String']['output'];
  user: UserType;
};

export type ClientPackageSubscriptionInput = {
  subscriptionPackageUuid: Scalars['String']['input'];
  uuid?: InputMaybe<Scalars['ID']['input']>;
};

export type ClientPackageSubscriptionType = {
  __typename?: 'ClientPackageSubscriptionType';
  amount: Scalars['Float']['output'];
  clientId: Scalars['Int']['output'];
  dateAdded: Scalars['String']['output'];
  expiresAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  uuid: Scalars['String']['output'];
};

export type EmailPasswordSigninInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type EmailPasswordSignupInput = {
  email: Scalars['String']['input'];
  password1: Scalars['String']['input'];
  password2: Scalars['String']['input'];
};

export type FolderInput = {
  description: Scalars['String']['input'];
  logo?: InputMaybe<Scalars['Upload']['input']>;
  name: Scalars['String']['input'];
  uuid?: InputMaybe<Scalars['ID']['input']>;
};

export type FolderType = {
  __typename?: 'FolderType';
  dateAdded: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastUpdated: Scalars['String']['output'];
  name: Scalars['String']['output'];
  uuid: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUpdateAsset: AssetType;
  createUpdateClientPackageSubscription: ClientPackageSubscriptionType;
  createUpdateFolder: FolderType;
  createUpdateSubscriptionPackage: SubscriptionPackageType;
  emailPasswordSignin: AuthTokenType;
  emailPasswordSignup: UserType;
  refreshToken: AuthTokenType;
};


export type MutationCreateUpdateAssetArgs = {
  input: AssetInput;
};


export type MutationCreateUpdateClientPackageSubscriptionArgs = {
  input: ClientPackageSubscriptionInput;
};


export type MutationCreateUpdateFolderArgs = {
  input: FolderInput;
};


export type MutationCreateUpdateSubscriptionPackageArgs = {
  input: SubscriptionPackageInput;
};


export type MutationEmailPasswordSigninArgs = {
  input: EmailPasswordSigninInput;
};


export type MutationEmailPasswordSignupArgs = {
  input: EmailPasswordSignupInput;
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  subscriptionPackages: Array<SubscriptionPackageType>;
  user?: Maybe<UserType>;
};

export type SubscriptionPackageInput = {
  maxAllowedSessions: Scalars['Int']['input'];
  monthlyRequests: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  storageCapacityMb: Scalars['Float']['input'];
  uuid?: InputMaybe<Scalars['ID']['input']>;
};

export type SubscriptionPackageType = {
  __typename?: 'SubscriptionPackageType';
  dateAdded: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastUpdated: Scalars['String']['output'];
  maxAllowedSessions: Scalars['Int']['output'];
  monthlyRequests: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  storageCapacityMb: Scalars['Float']['output'];
  uuid: Scalars['String']['output'];
};

export type UserType = {
  __typename?: 'UserType';
  dateAdded: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastUpdated: Scalars['String']['output'];
  uuid: Scalars['String']['output'];
  walletAddress?: Maybe<Scalars['String']['output']>;
};

export type EmailPasswordSigninMutationVariables = Exact<{
  input: EmailPasswordSigninInput;
}>;


export type EmailPasswordSigninMutation = { __typename?: 'Mutation', emailPasswordSignin: { __typename?: 'AuthTokenType', id: string, token: string, refreshToken: string } };

export type EmailPasswordSignupMutationVariables = Exact<{
  input: EmailPasswordSignupInput;
}>;


export type EmailPasswordSignupMutation = { __typename?: 'Mutation', emailPasswordSignup: { __typename?: 'UserType', id: string, uuid: string } };

export type CreateUpdateSubscriptionPackageMutationVariables = Exact<{
  input: SubscriptionPackageInput;
}>;


export type CreateUpdateSubscriptionPackageMutation = { __typename?: 'Mutation', createUpdateSubscriptionPackage: { __typename?: 'SubscriptionPackageType', id: string, uuid: string } };

export type SubscriptionPackagesQueryVariables = Exact<{ [key: string]: never; }>;


export type SubscriptionPackagesQuery = { __typename?: 'Query', subscriptionPackages: Array<{ __typename?: 'SubscriptionPackageType', id: string, uuid: string, name: string, price: number, storageCapacityMb: number, monthlyRequests: number, maxAllowedSessions: number }> };


export const EmailPasswordSigninDocument = gql`
    mutation EmailPasswordSignin($input: EmailPasswordSigninInput!) {
  emailPasswordSignin(input: $input) {
    id
    token
    refreshToken
  }
}
    `;

export function useEmailPasswordSigninMutation() {
  return Urql.useMutation<EmailPasswordSigninMutation, EmailPasswordSigninMutationVariables>(EmailPasswordSigninDocument);
};
export const EmailPasswordSignupDocument = gql`
    mutation EmailPasswordSignup($input: EmailPasswordSignupInput!) {
  emailPasswordSignup(input: $input) {
    id
    uuid
  }
}
    `;

export function useEmailPasswordSignupMutation() {
  return Urql.useMutation<EmailPasswordSignupMutation, EmailPasswordSignupMutationVariables>(EmailPasswordSignupDocument);
};
export const CreateUpdateSubscriptionPackageDocument = gql`
    mutation CreateUpdateSubscriptionPackage($input: SubscriptionPackageInput!) {
  createUpdateSubscriptionPackage(input: $input) {
    id
    uuid
  }
}
    `;

export function useCreateUpdateSubscriptionPackageMutation() {
  return Urql.useMutation<CreateUpdateSubscriptionPackageMutation, CreateUpdateSubscriptionPackageMutationVariables>(CreateUpdateSubscriptionPackageDocument);
};
export const SubscriptionPackagesDocument = gql`
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

export function useSubscriptionPackagesQuery(options?: Omit<Urql.UseQueryArgs<SubscriptionPackagesQueryVariables>, 'query'>) {
  return Urql.useQuery<SubscriptionPackagesQuery, SubscriptionPackagesQueryVariables>({ query: SubscriptionPackagesDocument, ...options });
};