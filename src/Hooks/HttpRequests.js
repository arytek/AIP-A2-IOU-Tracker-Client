import axios from 'axios';
import { useEffect, useState } from 'react';

/**
   * Uses the Axios HTTP library to make HTTP requests to a url.   
   * @param {string} url  The url you would like to fetch.
   * @returns {Object}  Object containing the following structure:
   * {
        loading: false,
        data: null,
        error: false,
      }
   */
export function useAxiosGet(url) {
  const [request, setRequest] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    setRequest({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(url)
      .then((response) => {
        setRequest({
          loading: false,
          data: response.data,
          error: false,
        });
      })
      .catch(() => {
        setRequest({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

  return request;
}
