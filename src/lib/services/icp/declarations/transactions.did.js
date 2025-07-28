export const idlFactory = ({ IDL }) => {
  const NFTError = IDL.Variant({
    TokenNotFound: IDL.Null,
    CollectionNotFound: IDL.Null,
    InvalidTokenID: IDL.Null,
    Unauthorized: IDL.Null,
  });
  const Result = IDL.Variant({ Ok: IDL.Nat, Err: NFTError });
  const NFTCollectionOutput = IDL.Record({
    id: IDL.Nat64,
    owner: IDL.Principal,
    logo: IDL.Opt(IDL.Text),
    name: IDL.Text,
    description: IDL.Text,
    symbol: IDL.Text,
  });
  const Result_1 = IDL.Variant({
    Ok: IDL.Tuple(IDL.Nat, NFTCollectionOutput),
    Err: NFTError,
  });
  const Nft = IDL.Record({
    id: IDL.Nat64,
    owner: IDL.Principal,
    metadata: IDL.Text,
    collection_id: IDL.Nat64,
  });
  const Result_2 = IDL.Variant({ Ok: IDL.Opt(Nft), Err: NFTError });
  const Result_3 = IDL.Variant({
    Ok: IDL.Tuple(IDL.Nat, Nft),
    Err: NFTError,
  });
  return IDL.Service({
    __get_candid_interface_tmp_hack: IDL.Func([], [IDL.Text], ["query"]),
    burn_nft: IDL.Func([IDL.Text], [Result], []),
    collection_metadata: IDL.Func(
      [IDL.Nat64],
      [IDL.Opt(NFTCollectionOutput)],
      ["query"],
    ),
    create_nft: IDL.Func(
      [IDL.Text, IDL.Text, IDL.Text, IDL.Opt(IDL.Text)],
      [Result_1],
      [],
    ),
    description: IDL.Func([IDL.Nat64], [IDL.Opt(IDL.Text)], ["query"]),
    get_nft_metadata: IDL.Func([IDL.Text], [Result_2], ["query"]),
    logo: IDL.Func([IDL.Nat64], [IDL.Opt(IDL.Text)], ["query"]),
    mint_nft: IDL.Func([IDL.Nat64, IDL.Text], [Result_3], []),
    name: IDL.Func([IDL.Nat64], [IDL.Opt(IDL.Text)], ["query"]),
    symbol: IDL.Func([IDL.Nat64], [IDL.Opt(IDL.Text)], ["query"]),
    transfer_nft: IDL.Func(
      [IDL.Text, IDL.Principal, IDL.Principal],
      [Result],
      [],
    ),
  });
};

export const init = () => {
  return [];
};
