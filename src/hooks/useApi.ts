import { useState, useEffect } from "react";
import axios, { Method } from "axios";

const BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "https://fakestoreapi.com";

const useFetch = <T>(
  method: Method,
  endpoint: string
): { data: T | null; loading: boolean; error: string | null } => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiCall = async () => {
      setLoading(true);
      try {
        const response = await axios({
          method,
          url: `${BASE_URL}${endpoint}`,
        });

        setData(response.data);
        console.log(response.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (method && endpoint) {
      apiCall();
    }
  }, [method, endpoint]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
