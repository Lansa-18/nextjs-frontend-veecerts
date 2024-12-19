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

export type AssetFilter = {
  contentType?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  maxSizeMb?: InputMaybe<Scalars['Float']['input']>;
  minSizeMb?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type AssetInput = {
  description: Scalars['String']['input'];
  file: Scalars['Upload']['input'];
  folderId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  uuid?: InputMaybe<Scalars['ID']['input']>;
};

export type AssetOrdering = {
  dateAdded?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdated?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetQueryOptions = {
  filter?: InputMaybe<AssetFilter>;
  ordering?: InputMaybe<AssetOrdering>;
};

export type AssetType = {
  __typename?: 'AssetType';
  contentType: Scalars['String']['output'];
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

export type ClientType = {
  __typename?: 'ClientType';
  apiSecretHash: Scalars['String']['output'];
  dateAdded: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastUpdated: Scalars['String']['output'];
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

export type FolderFilter = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FolderInput = {
  description: Scalars['String']['input'];
  logo: Scalars['Upload']['input'];
  name: Scalars['String']['input'];
  uuid?: InputMaybe<Scalars['ID']['input']>;
};

export type FolderOrdering = {
  dateAdded?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdated?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FolderQueryOptions = {
  filter?: InputMaybe<FolderFilter>;
  ordering?: InputMaybe<FolderOrdering>;
};

export type FolderType = {
  __typename?: 'FolderType';
  dateAdded: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  itemsCount: Scalars['Int']['output'];
  lastUpdated: Scalars['String']['output'];
  logoHash: Scalars['String']['output'];
  name: Scalars['String']['output'];
  totalSize: Scalars['Float']['output'];
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

export type PaginatedAssetQueryOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  opts?: InputMaybe<AssetQueryOptions>;
};

export type PaginatedFolderQueryOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  opts?: InputMaybe<FolderQueryOptions>;
};

export type ProfileType = {
  __typename?: 'ProfileType';
  dateAdded: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  imageHash?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  lastUpdated: Scalars['String']['output'];
  uuid: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  clientFolders: Array<FolderType>;
  folder: FolderType;
  folderAssets: Array<AssetType>;
  subscriptionPackages: Array<SubscriptionPackageType>;
  user?: Maybe<UserType>;
};


export type QueryClientFoldersArgs = {
  clientUuid: Scalars['ID']['input'];
  opts?: InputMaybe<PaginatedFolderQueryOptions>;
};


export type QueryFolderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFolderAssetsArgs = {
  folderId: Scalars['ID']['input'];
  opts?: InputMaybe<PaginatedAssetQueryOptions>;
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
  client?: Maybe<ClientType>;
  dateAdded: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastUpdated: Scalars['String']['output'];
  profile?: Maybe<ProfileType>;
  uuid: Scalars['String']['output'];
  walletAddress?: Maybe<Scalars['String']['output']>;
};

export type CreateUpdateFolderMutationVariables = Exact<{
  input: FolderInput;
}>;


export type CreateUpdateFolderMutation = { __typename?: 'Mutation', createUpdateFolder: { __typename: 'FolderType', id: string, uuid: string } };

export type EmailPasswordSigninMutationVariables = Exact<{
  input: EmailPasswordSigninInput;
}>;


export type EmailPasswordSigninMutation = { __typename?: 'Mutation', emailPasswordSignin: { __typename: 'AuthTokenType', id: string, token: string, refreshToken: string } };

export type EmailPasswordSignupMutationVariables = Exact<{
  input: EmailPasswordSignupInput;
}>;


export type EmailPasswordSignupMutation = { __typename?: 'Mutation', emailPasswordSignup: { __typename: 'UserType', id: string, uuid: string } };

export type CreateUpdateSubscriptionPackageMutationVariables = Exact<{
  input: SubscriptionPackageInput;
}>;


export type CreateUpdateSubscriptionPackageMutation = { __typename?: 'Mutation', createUpdateSubscriptionPackage: { __typename: 'SubscriptionPackageType', id: string, uuid: string } };

export type CreateUpdateClientPackageSubscriptionMutationVariables = Exact<{
  input: ClientPackageSubscriptionInput;
}>;


export type CreateUpdateClientPackageSubscriptionMutation = { __typename?: 'Mutation', createUpdateClientPackageSubscription: { __typename: 'ClientPackageSubscriptionType', id: string, uuid: string } };

export type ClientFoldersQueryVariables = Exact<{
  opts?: InputMaybe<PaginatedFolderQueryOptions>;
  clientUuid: Scalars['ID']['input'];
}>;


export type ClientFoldersQuery = { __typename?: 'Query', clientFolders: Array<{ __typename: 'FolderType', id: string, name: string, logoHash: string, uuid: string, description: string, dateAdded: string, totalSize: number, itemsCount: number }> };

export type FolderQueryVariables = Exact<{
  folderId: Scalars['ID']['input'];
}>;


export type FolderQuery = { __typename?: 'Query', folder: { __typename?: 'FolderType', name: string, uuid: string, id: string, description: string } };

export type FolderAssetsQueryVariables = Exact<{
  folderId: Scalars['ID']['input'];
  opts?: InputMaybe<PaginatedAssetQueryOptions>;
}>;


export type FolderAssetsQuery = { __typename?: 'Query', folderAssets: Array<{ __typename?: 'AssetType', id: string, uuid: string, nftId: number, name: string, ipfsHash: string, description: string, contentType: string, dateAdded: string, lastUpdated: string }> };

export type SubscriptionPackagesQueryVariables = Exact<{ [key: string]: never; }>;


export type SubscriptionPackagesQuery = { __typename?: 'Query', subscriptionPackages: Array<{ __typename: 'SubscriptionPackageType', id: string, uuid: string, name: string, price: number, storageCapacityMb: number, monthlyRequests: number, maxAllowedSessions: number }> };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user?: { __typename: 'UserType', id: string, uuid: string, email: string, client?: { __typename: 'ClientType', id: string, uuid: string } | null, profile?: { __typename: 'ProfileType', id: string, imageHash?: string | null, uuid: string, lastName?: string | null, firstName?: string | null } | null } | null };


export const CreateUpdateFolderDocument = gql`
    mutation CreateUpdateFolder($input: FolderInput!) {
  createUpdateFolder(input: $input) {
    __typename
    id
    uuid
  }
}
    `;

export function useCreateUpdateFolderMutation() {
  return Urql.useMutation<CreateUpdateFolderMutation, CreateUpdateFolderMutationVariables>(CreateUpdateFolderDocument);
};
export const EmailPasswordSigninDocument = gql`
    mutation EmailPasswordSignin($input: EmailPasswordSigninInput!) {
  emailPasswordSignin(input: $input) {
    __typename
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
    __typename
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
    __typename
    id
    uuid
  }
}
    `;

export function useCreateUpdateSubscriptionPackageMutation() {
  return Urql.useMutation<CreateUpdateSubscriptionPackageMutation, CreateUpdateSubscriptionPackageMutationVariables>(CreateUpdateSubscriptionPackageDocument);
};
export const CreateUpdateClientPackageSubscriptionDocument = gql`
    mutation CreateUpdateClientPackageSubscription($input: ClientPackageSubscriptionInput!) {
  createUpdateClientPackageSubscription(input: $input) {
    id
    uuid
    __typename
  }
}
    `;

export function useCreateUpdateClientPackageSubscriptionMutation() {
  return Urql.useMutation<CreateUpdateClientPackageSubscriptionMutation, CreateUpdateClientPackageSubscriptionMutationVariables>(CreateUpdateClientPackageSubscriptionDocument);
};
export const ClientFoldersDocument = gql`
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

export function useClientFoldersQuery(options: Omit<Urql.UseQueryArgs<ClientFoldersQueryVariables>, 'query'>) {
  return Urql.useQuery<ClientFoldersQuery, ClientFoldersQueryVariables>({ query: ClientFoldersDocument, ...options });
};
export const FolderDocument = gql`
    query Folder($folderId: ID!) {
  folder(id: $folderId) {
    name
    uuid
    id
    description
  }
}
    `;

export function useFolderQuery(options: Omit<Urql.UseQueryArgs<FolderQueryVariables>, 'query'>) {
  return Urql.useQuery<FolderQuery, FolderQueryVariables>({ query: FolderDocument, ...options });
};
export const FolderAssetsDocument = gql`
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

export function useFolderAssetsQuery(options: Omit<Urql.UseQueryArgs<FolderAssetsQueryVariables>, 'query'>) {
  return Urql.useQuery<FolderAssetsQuery, FolderAssetsQueryVariables>({ query: FolderAssetsDocument, ...options });
};
export const SubscriptionPackagesDocument = gql`
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

export function useSubscriptionPackagesQuery(options?: Omit<Urql.UseQueryArgs<SubscriptionPackagesQueryVariables>, 'query'>) {
  return Urql.useQuery<SubscriptionPackagesQuery, SubscriptionPackagesQueryVariables>({ query: SubscriptionPackagesDocument, ...options });
};
export const UserDocument = gql`
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

export function useUserQuery(options?: Omit<Urql.UseQueryArgs<UserQueryVariables>, 'query'>) {
  return Urql.useQuery<UserQuery, UserQueryVariables>({ query: UserDocument, ...options });
};