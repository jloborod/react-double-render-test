import { useCallback, useEffect, useState } from "react";
import { Data } from "./types";

type UseUserDataReturn = [
  data: Data,
  pull: () => void,
  isLoading: boolean
]

const useUserData = (): UseUserDataReturn => {
  const [data, setData] = useState<Data>({ cachedPages: [] });
  const [isLoading, setLoading] = useState(false);

  const pull = useCallback(async () => {
    setLoading(true);
    const response = await fetch("https://randomuser.me/api?results=10");
    const json = await response.json();
    setData((v) => ({
      cachedPages: [...v.cachedPages, json.results]
    }));
    setLoading(false);

  }, [setData]);

  return [data, pull, isLoading];
};

export default useUserData;
