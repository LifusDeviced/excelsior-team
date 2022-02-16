import axios, { AxiosInstance } from 'axios';
import md5 from 'md5';

export default function useAPI(): { API: AxiosInstance } {
  const baseURL = 'https://gateway.marvel.com/v1/public';
  const apikey = '3809c9b9c51b264bc78753437dd90e40';
  const ts = new Date().getTime().toString();
  const hash = md5(
    ts.concat('ba810ce91383c8aad73d1669613c08cf69a5e5ac').concat(apikey),
  );
  const API = axios.create({
    baseURL,
    params: {
      apikey,
      ts,
      hash,
    },
  });

  return {
    API,
  };
}
