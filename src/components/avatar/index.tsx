"use client";

import { Profile } from "@/lib/services/icp/declarations/backend.did";
import { ellipseAddress } from "@/lib/utils/text";
import { Avatar as UIAvatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { buildIpfsURL } from "@/lib/utils/urls";
import { useAtomValue } from "jotai";
import { agentAtom } from "@/stores/atoms/icp-agents";

const getDisplayName = (profile: Profile | null) => {
  if (profile?.first_name.at(0) || profile?.last_name.at(0)) {
    return `${profile.first_name.at(0)} ${profile.last_name.at(0)}`;
  } else {
    return profile?.email.at(0);
  }
};

export default function Avatar() {
  const store = useAtomValue(agentAtom)

  return (
    <div className="flex items-center space-x-[10px]">
      <UIAvatar className="w-10 h-10">
        <AvatarImage src={buildIpfsURL(store.profile?.image_hash.at(0) ?? "")}/>
        <AvatarFallback>{store.profile?.principal.toString().slice(0, 2).toUpperCase()}</AvatarFallback>
      </UIAvatar>
      <div className="font-medium dark:text-white space-y-[2px]">
        <div>{getDisplayName(store.profile)}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {ellipseAddress(store.profile?.principal.toString(), 10)}
        </div>
      </div>
    </div>
  );
}
