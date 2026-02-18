import React from "react";

interface PaginatedResponse<T> {
    data: T[];
    total: number;
    currentPage: number;
    totalPages: number;
}

interface Props {
    error: any;
    data: PaginatedResponse<any> | null;
    resource: string;
    children: React.ReactNode;
}


export default function DataStateHandler({ error, data, resource, children }: Props) {
    if (error) {
        return <div className="error">Erro: {error.message}</div>;
    }

    if (!data || !Array.isArray(data.data)) {
        return (
            <div>
                Os dados de {resource} não puderam ser carregados corretamente.
                Tente recarregar a página
            </div>
        );
    }

    if (data.total === 0) {
        <div>
            Nenhum registro de {resource} encontrado.
        </div>
    }

    return <>{children}</>
}
