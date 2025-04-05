import { useCallback, useEffect, useState } from "react";
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
        ((value: T) => encodeURIComponent(JSON.stringify(value)));

      return callback(value);
    },
    [options?.serialize],
  );
  const deserialize = useCallback(
    (value: string) => {
      const callback =
        options?.deserialize ||
        ((value: string) => JSON.parse(decodeURIComponent(value)) as T);

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

        // Update URL
        const url = new URL(window.location.href);

        if (nextState === initialState) {
          url.searchParams.delete(key);
        } else {
          url.searchParams.set(key, serialize(nextState));
        }

        // Update browser history without reload
        window.history.pushState({}, "", url);

        return nextState;
      });
    },
    [key, serialize, initialState],
  );

  return [state, setUrlState] as const;
}
