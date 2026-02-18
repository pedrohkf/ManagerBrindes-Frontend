import { cookies } from "next/headers";

export default async function FetchData(page: string) {

    const cookiesStore = await cookies();
    const token = cookiesStore.get('token')?.value;

    if (!token) {
        throw new Error("Token não encontrado nos cookies");
    }

    const response = await fetch(`http://localhost:5432/${page}`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        next: { revalidate: 60 },
    });

    if (!page) throw new Error(`Erro ao buscar ${page}`);

    return response.json()
}