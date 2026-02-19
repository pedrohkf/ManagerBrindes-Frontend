import { Button, GetProp, message, Upload, UploadFile, UploadProps } from "antd";
import Input from "antd/es/input/Input";
import { useState } from "react";
import { submitData } from "@/actions/post";

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

export default function FormClient() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const dataToSend = new FormData();

        const nameInput = e.currentTarget.elements.namedItem('name') as HTMLInputElement;
        const emailInput = e.currentTarget.elements.namedItem('email') as HTMLInputElement;
        const cpfInput = e.currentTarget.elements.namedItem('cpf') as HTMLInputElement;


        if (nameInput && emailInput && cpfInput) {
            dataToSend.append('name', nameInput.value);
            dataToSend.append('email', emailInput.value);
            dataToSend.append('cpf', cpfInput.value);
        }

        dataToSend.forEach((value, key) => console.log(`${key}:`, value));

        try {
            await submitData('clients', dataToSend);
            message.success("Produto salvo!");
        } catch (error: any) {
            message.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', marginBottom: 8 }}>
                    Nome
                </label>
                <Input
                    name="name"
                    placeholder="Digite o nome do cliente"
                    onChange={(e) => console.log(e.target.value)}
                />
                <label style={{ display: 'block', marginBottom: 8 }}>
                    Email
                </label>
                <Input
                    name="email"
                    placeholder="Digite o email do cliente"
                    onChange={(e) => console.log(e.target.value)}
                />
                <label style={{ display: 'block', marginBottom: 8 }}>
                    CPF
                </label>
                <Input
                    name="cpf"
                    placeholder="Digite o cpf do cliente"
                    onChange={(e) => console.log(e.target.value)}
                />
            </div>

            <Button
                type="primary"
                htmlType="submit"
                block
                loading={loading}
            >
                Salvar Dados
            </Button>
        </form>
    );
}
