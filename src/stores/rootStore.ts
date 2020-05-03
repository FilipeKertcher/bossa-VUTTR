import { applyMiddleware, createStore, compose } from "redux";
import { offline } from "@redux-offline/redux-offline";
import offlineConfig from "@redux-offline/redux-offline/lib/defaults";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import api from "services/api";
import { AxiosError } from "axios";

const effect = (effect: any, _action: any) => api(effect);
const discard = (error: any, _action: any, _retries: any) => {
  const { request, response } = error;
  if (!request) throw error; // There was an error creating the request
  if (!response) return false; // There was no response
  return 400 <= response.status && response.status < 500;
};

const offlineAxiosConfig = {
  ...offlineConfig,
  effect,
  discard,
};

const preLoadedState = {
  tools: [],
};

export default createStore(
  rootReducer,
  preLoadedState,
  compose(applyMiddleware(logger), offline(offlineAxiosConfig))
);
