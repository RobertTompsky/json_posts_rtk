import { api } from "@/shared/api";
import { Post } from "../model";
import { Params } from "@/shared/lib/types";

export const postApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], Params>({
            query: ({start, limit}) => ({
                url: `/posts`,
                method: 'GET',
                params: {
                    _start: start * 5,
                    _limit: limit
                }
            }),
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName
            },
            // Always merge incoming data to the cache entry
            merge: (currentCache, newItems) => {
                currentCache.push(...newItems)
            },
            // Refetch when the page arg changes
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg
            },
            providesTags: ['Posts']
        }),

        getSelectedPost: builder.query<Post, number>({
            query: (id) => ({
                url: `/posts/${id}`
            }),
            providesTags: ['Posts']
        })
    })
})

export const {useGetPostsQuery, useGetSelectedPostQuery} = postApi