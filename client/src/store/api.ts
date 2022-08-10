import {createApi} from '@reduxjs/toolkit/query/react'
import type {ITheme} from '../types/theme'
import {gql} from 'graphql-request'
import {graphqlRequestBaseQuery} from '@rtk-query/graphql-request-base-query'

export interface GetAllThemesResponse {
    getAllThemes: ITheme[]
}

// Define a service using a base URL and expected endpoints
export const api = createApi({
    baseQuery: graphqlRequestBaseQuery({url: 'http://localhost:3004/graphql'}),
    tagTypes: ['Themes'],
    endpoints: (build) => ({
        getAllThemes: build.query<ITheme[], {}>({
            query: () => ({
                document: gql`query GetAllThemes{
                    getAllThemes {
                        id
                        name
                    }
                }`
            }),
            transformResponse: (response: GetAllThemesResponse) => response.getAllThemes,
            providesTags: (result) =>
                result 
                    ? [ ...result.map(({id}) => ({type: 'Themes', id} as const)), {type: 'Themes', id: 'LIST'},]
                    : [{type: 'Themes', id: 'LIST'}],
            
        }),
        addTheme: build.mutation<ITheme, string>({
            query: (name) => ({
                document: gql`mutation addTheme($name: String!){
                    addTheme(name: $name) {
                        name
                    }
                }`,
                variables: {
                    name
                }
            }),
            invalidatesTags: [{type: 'Themes', id: 'LIST'}],
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetAllThemesQuery, useAddThemeMutation} = api