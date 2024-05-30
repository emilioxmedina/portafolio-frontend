import axios from "axios"
import { parsedEnv } from "../../env"

const baseAxios = axios.create({
    baseURL: parsedEnv.API_URL
})

baseAxios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${process.env.BEARER_TOKEN}`;
    return config;
})

export default baseAxios;