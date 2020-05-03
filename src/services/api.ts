import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", //process.env.API_URL,
});

const handleSuccessfullResponse = (response: AxiosResponse) => {
  return response;
};

const handleResponseError = (error: AxiosResponse) => {
  if (process.env.NODE_ENV === "development")
    console.warn(
      `Request error on : ${error.config.url}  
       ${JSON.stringify(error, null, 2)}`
    );

  return Promise.reject(error);
};

api.interceptors.response.use(handleSuccessfullResponse, handleResponseError);

export default api;
