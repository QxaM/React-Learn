import { useState } from "react";

const sendHttpRequest = async (fetchFn) => {
  return await fetchFn();
};

const useHttp = (initialState) => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState(initialState);

  const clearData = () => {
    setData(initialState);
  };

  const sendRequest = async (fetchFn) => {
    setIsFetching(true);
    setError(null);
    try {
      const resData = await sendHttpRequest(fetchFn);
      setData(resData);
    } catch (error) {
      setError(error.message || "Something went wrong!");
    }
    setIsFetching(false);
  };

  return {
    data,
    isFetching,
    error,
    sendRequest,
    clearData,
  };
};

export default useHttp;
