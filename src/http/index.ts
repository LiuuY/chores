import axios from "axios";

import { authInterceptor } from "./interceptors/authInterceptor";

const baseURL = process.env.APP_BASE_URL;

const httpInstance = axios.create({ baseURL });

export const initHttpInterceptors = () => {
  authInterceptor([httpInstance]);
};

export { httpInstance };
