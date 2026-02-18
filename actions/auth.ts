'use server'

import loginRequest from "@/services/authService"
import { cookies } from "next/headers";

export default async function loginAction(formaData: FormData) {
    const email = formaData.get('email') as string;
    const password = formaData.get('password') as string;

    try {
        const response = await loginRequest({ email: email, password: password });

        const cookieStore = await cookies()

        if (response.ok) {
            const data = await response.json();
            const token = data.accessToken;

            cookieStore.set("token", token, {
                httpOnly: true,
                secure: true,
                sameSite: 'lax',
                maxAge: 60 * 60 * 24
            })
        }
    } catch (error) {
        return {
            success: false,
            message: error + "Erro ao fazer login"
        }
    }
}