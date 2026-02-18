"use client"

import TableGeneric from "@/components/table/Table";
import { TableColumnsType } from "antd";

export interface ProductData {
    uuid: string;
    name: string;
}

const columns: TableColumnsType<ProductData> = [
    { title: 'Nome', dataIndex: 'name' },
];

export default function ProductTable({ paginatedData }: { paginatedData: any }) {
    return (
        <TableGeneric<ProductData>
            data={paginatedData.data}
            columns={columns}
            totalRecords={paginatedData.total}
            currentPage={paginatedData.currentPage}
            totalPages={paginatedData.totalPages}
        />
    );
}