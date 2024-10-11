import { useEffect, useState } from "react";

const useFetch = (fetchFn, initialValue) => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);

      try {
        const userPlaces = await fetchFn();
        setData(userPlaces);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data" });
      }
      setIsFetching(false);
    };
    fetchData();
  }, []);

  return { isFetching, error, data, setData };
};

export default useFetch;
