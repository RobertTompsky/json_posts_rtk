import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: `https://jsonplaceholder.typicode.com/`
});

const baseQueryWithRetry = retry(
    baseQuery,
    { maxRetries: 1 }
);

export const api = createApi({
    reducerPath: 'splitApi',
    baseQuery: baseQueryWithRetry,
    tagTypes: ['Posts'],
    refetchOnMountOrArgChange: true,
    endpoints: () => ({})
});