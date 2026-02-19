import DataStateHandler from './DataStateHandler';
import React from 'react';
import { submitProductData } from '@/actions/post';

interface PaginatedResponse<T> {
    data: T[];
    total: number;
    currentPage: number;
    totalPages: number;
}

interface PostProps<T> {
    data: T[]
    page: string;
    children: (data: PaginatedResponse<T>) => React.ReactNode;
}

export default async function Post<T>({ page, data, children }: PostProps<T>) {
    let response: PaginatedResponse<T> | null = null;
    let error: any = null;

    // try {
    //     response = await submitProductData(page, data);
    //     console.log(response)
    // } catch (e) {
    //     error = e;
    // }

    return (
        <DataStateHandler error={error} data={response} page={page}>
            {response && children(response)}
        </DataStateHandler>
    )
}

