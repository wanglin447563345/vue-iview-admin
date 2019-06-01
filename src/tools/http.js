import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_BASE_API;
export const post = (url, options) => {
  const defaultOptions = {
    credentials: "include",
    method: "post",
    url
  };
  const newOptions = { ...defaultOptions, ...options };
  if (!(newOptions.data instanceof FormData)) {
    newOptions.headers = {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
      ...newOptions.headers
    };
    newOptions.data = JSON.stringify(newOptions.data);
  } else {
    // newOptions.body is FormData
    newOptions.headers = {
      Accept: "application/json",
      ...newOptions.headers
    };
  }
  return axios(newOptions)
    .then(data => {
      return data.data
    })
    .catch(e => e);
};
