"use client"
import { Button, Modal, message } from "antd";
import { useState } from "react";
import FormGeneric from "../form/FormGeneric";
import { submitProductData } from "@/actions/post";

interface ModalButtonProps {
    page: string;
    title: string;
    fields: any[];
}

export default function ModalButton({ title, fields, page }: ModalButtonProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = async (formData: FormData) => {
        try {
            const response = await submitProductData(page, formData);
            console.log('Response:', response);
            message.success('Dados salvos com sucesso!');
            setIsModalOpen(false);
        } catch (error) {
            console.error('Error submitting form:', error);
            message.error('Erro ao salvar dados');
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Button onClick={showModal}>
                Criar
            </Button>
            <Modal
                title={`Criar um ${title}`}
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onCancel={handleCancel}
                okText="Salvar"
                cancelText="Cancelar"
            >
                <FormGeneric fields={fields} onSubmit={handleOk} />
            </Modal>
        </div>
    )
}
