import { cookies } from "next/headers";

export default async function FetchData(resource: string, page: string) {

    const cookiesStore = await cookies();
    const token = cookiesStore.get('token')?.value;

    if (!token) {
        throw new Error("Token não encontrado nos cookies");
    }

    const response = await fetch(`http://localhost:5432/${resource}/${page}`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        next: { revalidate: 60 },
    });

    if (!resource) throw new Error(`Erro ao buscar ${resource}`);

    return response.json()
}