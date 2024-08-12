import axios from "axios";
import queryString from "query-string";

export const baseURL = `${process.env.REACT_APP_API_URL}/api`;
export const API_DOMAIN = String(process.env.REACT_APP_API_DOMAIN);
export const baseURLv2 = `${process.env.REACT_APP_API_URL}/api/v2`;
export const baseURLWordService = `${process.env.REACT_APP_API_URL}/api/word-services`;

const axiosClient = axios.create({
  baseURL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

export const axiosClientV2 = axios.create({
  baseURL: baseURLv2,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

export const axiosClientWordsService = axios.create({
  baseURL: baseURLWordService,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

export default axiosClient;
