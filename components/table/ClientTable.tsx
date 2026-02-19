"use client"

import TableGeneric from "@/components/table/Table";
import { TableColumnsType } from "antd";

export interface ClientData {
    uuid: string;
    name: string;
    cpf: string;
    email: string;
}

const columns: TableColumnsType<ClientData> = [
    { title: 'Nome', dataIndex: 'name' },
    { title: 'CPF', dataIndex: 'cpf' },
    { title: 'Email', dataIndex: 'email' },
];

export default function ClientTable({ paginatedData }: { paginatedData: any }) {
    return (
        <TableGeneric<ClientData>
            data={paginatedData.data}
            columns={columns}
            totalRecords={paginatedData.total}
            currentPage={paginatedData.currentPage}
            totalPages={paginatedData.totalPages}
        />
    );
}