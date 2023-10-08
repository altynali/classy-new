import axios, { AxiosRequestConfig } from "axios"

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    optimist_api_key: import.meta.env.VITE_API_KEY,
  },
}

const classyApi = axios.create(config)

export default classyApi
