import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface NFTCollectionOutput {
  'id' : bigint,
  'owner' : Principal,
  'logo' : [] | [string],
  'name' : string,
  'description' : string,
  'symbol' : string,
}
export type NFTError = { 'TokenNotFound' : null } |
  { 'CollectionNotFound' : null } |
  { 'InvalidTokenID' : null } |
  { 'Unauthorized' : null };
export interface Nft {
  'id' : bigint,
  'owner' : Principal,
  'metadata' : string,
  'collection_id' : bigint,
}
export type Result = { 'Ok' : bigint } |
  { 'Err' : NFTError };
export type Result_1 = { 'Ok' : [bigint, NFTCollectionOutput] } |
  { 'Err' : NFTError };
export type Result_2 = { 'Ok' : [] | [Nft] } |
  { 'Err' : NFTError };
export type Result_3 = { 'Ok' : [bigint, Nft] } |
  { 'Err' : NFTError };
export interface _SERVICE {
  '__get_candid_interface_tmp_hack' : ActorMethod<[], string>,
  'burn_nft' : ActorMethod<[string], Result>,
  'collection_metadata' : ActorMethod<[bigint], [] | [NFTCollectionOutput]>,
  'create_nft' : ActorMethod<[string, string, string, [] | [string]], Result_1>,
  'description' : ActorMethod<[bigint], [] | [string]>,
  'get_nft_metadata' : ActorMethod<[string], Result_2>,
  'logo' : ActorMethod<[bigint], [] | [string]>,
  'mint_nft' : ActorMethod<[bigint, string], Result_3>,
  'name' : ActorMethod<[bigint], [] | [string]>,
  'symbol' : ActorMethod<[bigint], [] | [string]>,
  'transfer_nft' : ActorMethod<[string, Principal, Principal], Result>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
