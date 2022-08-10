import { createApi } from '@reduxjs/toolkit/query/react'
import type { ITheme } from '../types/theme'
import { gql } from 'graphql-request'
import {graphqlRequestBaseQuery} from '@rtk-query/graphql-request-base-query'

export interface GetAllThemesResponse {
    getAllThemes: ITheme[]
}

// Define a service using a base URL and expected endpoints
export const api = createApi({
    baseQuery: graphqlRequestBaseQuery({ url: 'http://localhost:3004/graphql' }),
    endpoints: (builder) => ({
        getAllThemes: builder.query<GetAllThemesResponse, {}>({
            query: () => ({
                document: gql`query GetAllThemes{
                  getAllThemes {
                    id
                    name
                  }
                }`
            })
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllThemesQuery } = api