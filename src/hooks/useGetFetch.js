import { useEffect, useState } from "react";
import config from "../helpers/config";

const useGetFetch = (api) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  let isMounted = true;
  let url = config.API_URL() + api;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setData(data);
          setLoading(false);
        }
      });
    return () => (isMounted = false);
  }, [api]);

  return { loading, setLoading, data, setData };
};

export default useGetFetch;
