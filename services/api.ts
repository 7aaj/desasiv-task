import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class APIService {
  baseApi!: AxiosInstance;
  API_KEY = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY;

  init() {
    this.baseApi = axios.create({
      baseURL: "https://www.googleapis.com/books/v1/volumes",
    });
    this.baseApi.interceptors.request.use(
      async (config) => {
        config.params = {
          ...(config.params || {}),
          key: this.API_KEY,
        };
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.baseApi.interceptors.response.use(
      (response) => response,
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  fetchData(param: AxiosRequestConfig = {}) {
    return this.baseApi
      .request(param)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error));
  }
}

const apiService = new APIService();
apiService.init();

export default apiService;
