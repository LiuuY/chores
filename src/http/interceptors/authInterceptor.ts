import { AxiosInstance } from "axios";

const authInterceptor = (clients: Array<AxiosInstance>) => {
  clients.forEach((item) => {
    item.interceptors.request.use(async (config) => {
      const token = "token";

      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };

      return config;
    });
  });
};

export { authInterceptor };
