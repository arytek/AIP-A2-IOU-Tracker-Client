import axios from 'axios';
import { useEffect, useState } from 'react';
import { findLocalItems } from '../Utility/Util';
/**
   * Uses the Axios HTTP library to make HTTP API requests to the main Favoura server.  
   * @param {String} endpoint  The API end-point you would like to access.
   * @param {String} method  The HTTP method you would like to use (GET, POST).
   * @param {String} params  The params of this HTTP POST request.
   * @param {Object} body  The body data object you would like to send (optional).
   * @returns {Object}  Object containing the following structure:
   * {
        loading: Boolean,
        data: Object,
        error: Boolean,
      }
   */
export function useAxios(endpoint, method, params, body) {
  console.log('httpRequestMainServer:', endpoint, method, params, body);
  const [request, setRequest] = useState({
    loading: false,
    data: null,
    error: false,
  });

  let accessToken = findLocalItems('accessToken')[0].val;
  const config = {
    method: method,
    baseURL: 'http://localhost:4000/api/' + endpoint,
    params: params,
    headers: {
      'Content-Type': 'application/json',
      accesstoken: accessToken,
    },
    data: JSON.stringify(body), // Only applicable for request methods 'PUT', 'POST', 'DELETE , and 'PATCH'
  };

  useEffect(() => {
    setRequest({
      loading: true,
      data: null,
      error: false,
    });
    axios(config)
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
  }, []);

  return request;
}
