import { useCallback, useSyncExternalStore } from "react";

const event = new Event("locationchange");

export function useSearchParamsState(
  key: string,
): [string, (newValue: string) => void] {
  const search = useSyncExternalStore(subscribe, getSnapshot);
  const value = new URLSearchParams(search).get(key) ?? "";
  const setter = useCallback(
    (newValue: string) => {
      const searchParams = new URLSearchParams(location.search);
      if (newValue === "") searchParams.delete(key);
      else searchParams.set(key, newValue);
      const pathname = [location.pathname, searchParams.toString()]
        .filter((s) => s)
        .join("?");
      history.replaceState(null, "", pathname);
      dispatchEvent(event);
    },
    [key],
  );
  return [value, setter];
}

function subscribe(callback: () => void) {
  addEventListener(event.type, callback);
  return () => removeEventListener(event.type, callback);
}

function getSnapshot() {
  return window.location.search;
}
