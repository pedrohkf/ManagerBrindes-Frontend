'use client'
import { useState } from 'react'
import Button from '../form/button'
import loginAction from '@/actions/auth';

export default function FormAuth() {
    const [error, setError] = useState<string>()

    const handleSubmit = async (formData: FormData) => {
        setError(undefined);

        const email = formData.get('email') as string;
        const password = formData.get('passoword') as string;

        if (!email || !password) {
            setError("Campos obrigatórios");
        }

        await loginAction(formData)
    }


    return (
        <form action={handleSubmit}>
            <input type="email" name='email' placeholder='Insira seu email' required />
            <input type="password" name='password' placeholder='Insira sua senha' required />

            <Button className='button'>
                Entrar
            </Button>

            <p>{error}</p>
        </form>
    )
}
