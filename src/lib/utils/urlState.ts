import { useCallback, useEffect, useState } from "react";
import { jsonParse, jsonStringify } from "./json";
export function useUrlState<T>(
  key: string,
  initialState: T,
  options?: {
    serialize?: (value: T) => string;
    deserialize?: (value: string) => T;
  },
) {
  const [state, setState] = useState<T>(initialState);

  const serialize = useCallback(
    (value: T) => {
      const callback =
        options?.serialize ||
        ((value: T) => {
          return encodeURIComponent(jsonStringify(value));
        });

      return callback(value);
    },
    [options?.serialize],
  );
  const deserialize = useCallback(
    (value: string) => {
      const callback =
        options?.deserialize ||
        ((value: string) => {
          return jsonParse(decodeURIComponent(value));
        });

      return callback(value);
    },
    [options?.deserialize],
  );

  // Load from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paramValue = params.get(key);

    if (paramValue) {
      try {
        setState(deserialize(paramValue));
      } catch (error) {
        console.error("Failed to parse URL parameter:", error);
      }
    }
  }, [key, deserialize]);

  // Update URL and state
  const setUrlState = useCallback(
    (newState: T | ((prevState: T) => T)) => {
      setState((prevState) => {
        // Calculate the new state
        const nextState =
          typeof newState === "function"
            ? (newState as (prevState: T) => T)(prevState)
            : newState;

        return nextState;
      });

      // Move URL update to useEffect to avoid updating during render
    },
    [setState],
  );

  // Use effect to update URL whenever state changes
  useEffect(() => {
    const url = new URL(window.location.href);

    if (state === initialState) {
      url.searchParams.delete(key);
    } else {
      url.searchParams.set(key, serialize(state));
    }

    window.history.pushState({}, "", url);
  }, [state, key, serialize, initialState]);

  return [state, setUrlState] as const;
}
