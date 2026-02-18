"use client"

import TableGeneric from "@/components/table/Table";
import { TableColumnsType } from "antd";

export interface OrderData {
    uuid: string;
    reference: string;
    totalPrice: number;
    totalPriceBV: number;
    profitability: number;
    spent: number;
    items: {
        product: {
            name: string;
        };
    }[];
    status: number;
}

const columns: TableColumnsType<OrderData> = [
    { title: 'Ref', dataIndex: 'reference' },
    { title: 'Preço Total', dataIndex: 'totalPrice' },
    { title: 'Preço Total BV', dataIndex: 'totalPriceBV' },
    { title: 'Rentabilidade', dataIndex: 'profitability' },
    { title: 'Custo', dataIndex: 'spent' },
    {
        title: 'Produto', dataIndex: 'items', key: 'items', render: (items: any[]) => {
            if (!items) return "-";
            return items.map(item => item.product?.name).join(", ")
        }
    },
    { title: 'Status', dataIndex: 'status' }
];

export default function OrderTable({ paginatedData }: { paginatedData: any }) {
    return (
        <TableGeneric<OrderData>
            data={paginatedData.data}
            columns={columns}
            totalRecords={paginatedData.total}
            currentPage={paginatedData.currentPage}
            totalPages={paginatedData.totalPages}
        />
    );
}