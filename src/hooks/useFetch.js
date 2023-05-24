import { useState, useCallback } from "react";
import Fetch from "../utils/Fetch";

const useFetch = (baseURL) => {
  const [info, setInfo] = useState({});
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const fetchHandler = useCallback(
    async (enpoint, action, data = {}) => {
      setPending(true);
      setError(null);
      let result = {};
      try {
        switch (action) {
          case "GET":
            result = await Fetch.get(baseURL + enpoint);
            setInfo(result);
            break;
          case "POST":
            await Fetch.post(baseURL + enpoint, data);
            break;
          case "UPDATE":
            await Fetch.update(baseURL + enpoint, data);
            break;
          case "DELETE":
            await Fetch.delete(baseURL + enpoint);
            break;
          default:
            throw new Error("Something went wrong! Error fetching data.");
        }
      } catch (error) {
        setError({
          message: error.message || "Something went wrong!",
        });
      }
      setPending(false);
    },
    [baseURL]
  );
  return { info, pending, error, fetchHandler };
};

export default useFetch;