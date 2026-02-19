"use client"
import { Button, Modal, message } from "antd";
import { useState } from "react";
import FormProduct from "../form/FormProduct";
import { submitProductData } from "@/actions/post";

interface ModalButtonProps {
    page: string;
    title: string;
    fields: any[];
}

export default function ModalButton({ title }: ModalButtonProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
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
               footer={null}
            >
                <FormProduct />
            </Modal>
        </div>
    )
}
