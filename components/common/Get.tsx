import FetchData from '@/services/api'
import DataStateHandler from './DataStateHandler';
import React from 'react';

interface PaginatedResponse<T> {
    data: T[];
    total: number;
    currentPage: number;
    totalPages: number;
}

interface GetProps<T> {
    page: string;
    children: (data: PaginatedResponse<T>) => React.ReactNode;
}

export default async function Get<T>({page, children }: GetProps<T>) {
    let response: PaginatedResponse<T> | null = null;
    let error: any = null;

    try {
        response = await FetchData(page);
        console.log(response)
    } catch (e) {
        error = e;
    }

    return (
        <DataStateHandler error={error} data={response} page={page}>
            {response && children(response)}
        </DataStateHandler>
    )
}

