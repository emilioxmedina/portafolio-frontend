import axios from "axios"
import { parsedEnv } from "../../env"

const baseAxios = axios.create({
    baseURL: parsedEnv.API_URL
})

baseAxios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer 961dd5cb514b717ac32a236d6a75c37f3812e7c852dffef0e1be7eee28a09d58be3c8038f7489afef4eabba5aa10bdc598bd4d0ef89c7ebaf94ffd0a4b6e4569038e020cdc09b5c70f3898b3bc35177f84289363a6646fc24515a8be34e9d8269392cdff2e73336dd85d95186a9ee2f9c51d93eb088ab7b90b751fbcaca205f6`;
    return config;
})

export default baseAxios;