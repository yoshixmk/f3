import { Plugin, InjectionKey, inject } from "vue";
import axios, { AxiosInstance } from "axios";

const AxiosKey: InjectionKey<AxiosInstance> = Symbol()
const instance = axios.create({ baseURL: process.env.API_URL || '' })

export const axiosPlugin: Plugin = {
  install(app) {
    // for options api
    app.config.globalProperties.$axios = instance
    // for composition api
    app.provide(AxiosKey, instance)
  }
}

export const useAxios = (): AxiosInstance => {
  const axios = inject<AxiosInstance>(AxiosKey)
  if (!axios) {
    throw Error(`${AxiosKey} is not provided!`)
  }
  return axios
}
