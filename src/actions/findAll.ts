import baseAxios from "./baseAxios";

export default async function findAll() {
    const response = await baseAxios.get(`/posts`);
    return response.data;
}