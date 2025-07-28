import {
  _SERVICE,
  Client,
  Profile,
} from "@/lib/services/icp/declarations/backend.did";
import { Actor, ActorSubclass } from "@dfinity/agent";
import { atomWithLocalStorage } from "./utils";
import { ATOM_KEYS } from "@/constants/localStorage/atoms";

interface AgentsStore {
  client: Client | null;
  profile: Profile | null;
  backendActor: ActorSubclass<_SERVICE> | null;
  transactionsActor: Actor | null;
}

export const agentAtom = atomWithLocalStorage(ATOM_KEYS.AGENT, {
  client: null,
  profile: null,
  backendActor: null,
  transactionsActor: null,
} as AgentsStore);
