import baseAxios from "./baseAxios";

type Post = {
    data: [
        {
            attributes: {
                Title: string;
                Body: string;
            }
        }
    ]
}

export default async function findAll() {
    const response = await baseAxios.get<Post>(`/posts`);
    return response.data;
}