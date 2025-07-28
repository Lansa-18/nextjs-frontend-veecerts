import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Account {
  'ownder' : string,
  'subaccount' : [] | [Uint8Array | number[]],
}
export interface Asset {
  'folder_uuid' : string,
  'ipfs_hash' : string,
  'size_mb' : number,
  'name' : string,
  'uuid' : string,
  'description' : string,
  'last_updated' : string,
  'date_added' : string,
  'owner_id' : Principal,
}
export interface AssetFilter {
  'max_size_mb' : [] | [number],
  'name' : [] | [string],
  'description' : [] | [string],
  'min_size_mb' : [] | [number],
}
export interface AssetOrdering {
  'last_updated' : [] | [boolean],
  'date_added' : [] | [boolean],
}
export interface AssetQueryOptions {
  'filter' : [] | [AssetFilter],
  'ordering' : [] | [AssetOrdering],
}
export interface Client {
  'principal' : Principal,
  'uuid' : string,
  'active_subscription_uuid' : [] | [string],
}
export interface Folder {
  'name' : string,
  'uuid' : string,
  'description' : string,
  'last_updated' : string,
  'date_added' : string,
  'owner_id' : Principal,
  'client_id' : string,
}
export interface FolderFilter {
  'name' : [] | [string],
  'description' : [] | [string],
}
export interface FolderQueryOptions {
  'filter' : [] | [FolderFilter],
  'ordering' : [] | [AssetOrdering],
}
export interface Paginated {
  'opts' : [] | [AssetQueryOptions],
  'offset' : [] | [bigint],
  'limit' : [] | [bigint],
}
export interface Paginated_1 {
  'opts' : [] | [FolderQueryOptions],
  'offset' : [] | [bigint],
  'limit' : [] | [bigint],
}
export interface Profile {
  'principal' : Principal,
  'last_updated' : string,
  'email' : [] | [string],
  'image_hash' : [] | [string],
  'date_added' : string,
  'first_name' : [] | [string],
  'last_name' : [] | [string],
}
export type Result = { 'Ok' : bigint } |
  { 'Err' : string };
export type Result_1 = { 'Ok' : Asset } |
  { 'Err' : string };
export type Result_2 = { 'Ok' : Folder } |
  { 'Err' : string };
export interface SubscriptionPackage {
  'name' : string,
  'uuid' : string,
  'last_updated' : bigint,
  'monthly_requests' : bigint,
  'storage_capacity_mb' : bigint,
  'price' : number,
  'max_allowed_sessions' : bigint,
}
export interface _SERVICE {
  '__get_candid_interface_tmp_hack' : ActorMethod<[], string>,
  'check_balance' : ActorMethod<[Principal], Result>,
  'check_canister_balance' : ActorMethod<[], Result>,
  'check_subscription_status' : ActorMethod<[], string>,
  'client_assets' : ActorMethod<[string, [] | [Paginated]], Array<Asset>>,
  'client_folder' : ActorMethod<[string, string], [] | [Folder]>,
  'client_folder_assets' : ActorMethod<
    [string, string, [] | [Paginated]],
    Array<Asset>
  >,
  'client_folders' : ActorMethod<[string, [] | [Paginated_1]], Array<Folder>>,
  'create_update_asset' : ActorMethod<[Asset], Result_1>,
  'create_update_client_package_subscription' : ActorMethod<[string], string>,
  'create_update_folder' : ActorMethod<[Folder], Result_2>,
  'create_update_subscription_package' : ActorMethod<
    [[] | [string], string, number, bigint, bigint, bigint],
    string
  >,
  'get_canister_account' : ActorMethod<[], Account>,
  'get_client' : ActorMethod<[], [] | [Client]>,
  'get_profile' : ActorMethod<[], [] | [Profile]>,
  'get_profile_by_principal' : ActorMethod<[Principal], [] | [Profile]>,
  'my_balance' : ActorMethod<[], Result>,
  'register' : ActorMethod<[], string>,
  'subscription_packages' : ActorMethod<[], Array<SubscriptionPackage>>,
  'update_profile' : ActorMethod<
    [[] | [string], [] | [string], [] | [string], [] | [string]],
    string
  >,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
