export const idlFactory = ({ IDL }) => {
  const Result = IDL.Variant({ Ok: IDL.Nat64, Err: IDL.Text });
  const AssetFilter = IDL.Record({
    max_size_mb: IDL.Opt(IDL.Float64),
    name: IDL.Opt(IDL.Text),
    description: IDL.Opt(IDL.Text),
    min_size_mb: IDL.Opt(IDL.Float64),
  });
  const AssetOrdering = IDL.Record({
    last_updated: IDL.Opt(IDL.Bool),
    date_added: IDL.Opt(IDL.Bool),
  });
  const AssetQueryOptions = IDL.Record({
    filter: IDL.Opt(AssetFilter),
    ordering: IDL.Opt(AssetOrdering),
  });
  const Paginated = IDL.Record({
    opts: IDL.Opt(AssetQueryOptions),
    offset: IDL.Opt(IDL.Nat64),
    limit: IDL.Opt(IDL.Nat64),
  });
  const Asset = IDL.Record({
    folder_uuid: IDL.Text,
    ipfs_hash: IDL.Text,
    size_mb: IDL.Float64,
    name: IDL.Text,
    uuid: IDL.Text,
    description: IDL.Text,
    last_updated: IDL.Text,
    date_added: IDL.Text,
    owner_id: IDL.Principal,
  });
  const Folder = IDL.Record({
    name: IDL.Text,
    uuid: IDL.Text,
    description: IDL.Text,
    last_updated: IDL.Text,
    date_added: IDL.Text,
    owner_id: IDL.Principal,
    client_id: IDL.Text,
  });
  const FolderFilter = IDL.Record({
    name: IDL.Opt(IDL.Text),
    description: IDL.Opt(IDL.Text),
  });
  const FolderQueryOptions = IDL.Record({
    filter: IDL.Opt(FolderFilter),
    ordering: IDL.Opt(AssetOrdering),
  });
  const Paginated_1 = IDL.Record({
    opts: IDL.Opt(FolderQueryOptions),
    offset: IDL.Opt(IDL.Nat64),
    limit: IDL.Opt(IDL.Nat64),
  });
  const Result_1 = IDL.Variant({ Ok: Asset, Err: IDL.Text });
  const Result_2 = IDL.Variant({ Ok: Folder, Err: IDL.Text });
  const Account = IDL.Record({
    ownder: IDL.Text,
    subaccount: IDL.Opt(IDL.Vec(IDL.Nat8)),
  });
  const Client = IDL.Record({
    principal: IDL.Principal,
    uuid: IDL.Text,
    active_subscription_uuid: IDL.Opt(IDL.Text),
  });
  const Profile = IDL.Record({
    principal: IDL.Principal,
    last_updated: IDL.Text,
    email: IDL.Opt(IDL.Text),
    image_hash: IDL.Opt(IDL.Text),
    date_added: IDL.Text,
    first_name: IDL.Opt(IDL.Text),
    last_name: IDL.Opt(IDL.Text),
  });
  const SubscriptionPackage = IDL.Record({
    name: IDL.Text,
    uuid: IDL.Text,
    last_updated: IDL.Nat64,
    monthly_requests: IDL.Nat64,
    storage_capacity_mb: IDL.Nat64,
    price: IDL.Float64,
    max_allowed_sessions: IDL.Nat64,
  });
  return IDL.Service({
    __get_candid_interface_tmp_hack: IDL.Func([], [IDL.Text], ["query"]),
    check_balance: IDL.Func([IDL.Principal], [Result], ["query"]),
    check_canister_balance: IDL.Func([], [Result], ["query"]),
    check_subscription_status: IDL.Func([], [IDL.Text], ["query"]),
    client_assets: IDL.Func(
      [IDL.Text, IDL.Opt(Paginated)],
      [IDL.Vec(Asset)],
      ["query"],
    ),
    client_folder: IDL.Func([IDL.Text, IDL.Text], [IDL.Opt(Folder)], ["query"]),
    client_folder_assets: IDL.Func(
      [IDL.Text, IDL.Text, IDL.Opt(Paginated)],
      [IDL.Vec(Asset)],
      ["query"],
    ),
    client_folders: IDL.Func(
      [IDL.Text, IDL.Opt(Paginated_1)],
      [IDL.Vec(Folder)],
      ["query"],
    ),
    create_update_asset: IDL.Func([Asset], [Result_1], []),
    create_update_client_package_subscription: IDL.Func(
      [IDL.Text],
      [IDL.Text],
      [],
    ),
    create_update_folder: IDL.Func([Folder], [Result_2], []),
    create_update_subscription_package: IDL.Func(
      [
        IDL.Opt(IDL.Text),
        IDL.Text,
        IDL.Float64,
        IDL.Nat64,
        IDL.Nat64,
        IDL.Nat64,
      ],
      [IDL.Text],
      [],
    ),
    get_canister_account: IDL.Func([], [Account], ["query"]),
    get_client: IDL.Func([], [IDL.Opt(Client)], ["query"]),
    get_profile: IDL.Func([], [IDL.Opt(Profile)], ["query"]),
    get_profile_by_principal: IDL.Func(
      [IDL.Principal],
      [IDL.Opt(Profile)],
      ["query"],
    ),
    my_balance: IDL.Func([], [Result], ["query"]),
    register: IDL.Func([], [IDL.Text], []),
    subscription_packages: IDL.Func(
      [],
      [IDL.Vec(SubscriptionPackage)],
      ["query"],
    ),
    update_profile: IDL.Func(
      [
        IDL.Opt(IDL.Text),
        IDL.Opt(IDL.Text),
        IDL.Opt(IDL.Text),
        IDL.Opt(IDL.Text),
      ],
      [IDL.Text],
      [],
    ),
  });
};
export const init = () => {
  return [];
};
