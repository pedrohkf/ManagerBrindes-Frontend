"use client"
import { Pagination, Table, TableColumnsType } from "antd";
import { usePathname, useRouter } from "next/navigation";


type TableProps<T> = {
    data: T[];
    columns: TableColumnsType<T>;
    totalPages: number;
    totalRecords: number;
    currentPage: number;
    rowKey?: string | ((record: T) => string);
}

function TableGeneric<T extends Object>({ data, totalRecords, currentPage, columns, rowKey = "uuid" }: TableProps<T>) {
    const router = useRouter()
    const pathname = usePathname();

    const handlePageChange = (page: number) => {
        router.push(`${pathname}?page=${page}`);
    }

    return (
        <div>
            <Table<T>
                columns={columns}
                dataSource={data}
                pagination={false}
                rowKey={rowKey}
            />

            <Pagination
                current={currentPage}
                total={totalRecords}
                pageSize={10}
                showSizeChanger={false}
                onChange={handlePageChange}
            />
        </div>
    )
}

export default TableGeneric
