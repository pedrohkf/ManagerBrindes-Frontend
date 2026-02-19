'use server'

import { cookies } from "next/headers";

export async function submitProductData(page: string, formData: FormData) {
    const cookiesStore = await cookies();
    const token = cookiesStore.get('token')?.value;

    if (!token) {
        throw new Error("Token não encontrado nos cookies");
    }

    const response = await fetch(`http://localhost:5432/${page}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: formData,
    });

    if (!response.ok) {
    const errorDetail = await response.json().catch(() => ({}));
    const errorMessage = typeof errorDetail.message === 'object' 
        ? JSON.stringify(errorDetail.message) 
        : errorDetail.message;

    throw new Error(errorMessage || `Erro desconhecido: ${response.statusText}`);
}

    return response.json();
}
