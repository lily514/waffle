import {createApi} from '@reduxjs/toolkit/query/react'
import type {ITheme} from '../types/theme'
import {gql} from 'graphql-request'
import {graphqlRequestBaseQuery} from '@rtk-query/graphql-request-base-query'
import {IMeal} from "../types/meal";

export interface GetAllThemesResponse {
    getAllThemes: ITheme[]
}

export interface GetAllMealsResponse {
    getAllMeals: IMeal[]
}

// Define a service using a base URL and expected endpoints
export const api = createApi({
    baseQuery: graphqlRequestBaseQuery({url: 'http://localhost:3004/graphql'}),
    tagTypes: ['Themes', 'Meals'],
    endpoints: (build) => ({
        getAllThemes: build.query<ITheme[], void>({
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
        }),
        getAllMeals: build.query<IMeal[], void>({
            query: () => ({
                document: gql`query GetAllMeals{
                    getAllMeals {
                        id
                        name
                        themeId
                        notes
                    }
                }`
            }),
            transformResponse: (response: GetAllMealsResponse) => response.getAllMeals,
            providesTags: (result) =>
                result
                    ? [ ...result.map(({id}) => ({type: 'Meals', id} as const)), {type: 'Meals', id: 'LIST'},]
                    : [{type: 'Meals', id: 'LIST'}],

        }),
        addMeal: build.mutation<IMeal, Partial<IMeal>>({
            query: ({name, notes, themeId}) => ({
                document: gql`mutation addMeal($themeId: ID!, $name: String!, $notes: String ){
                    addMeal(themeId: $themeId, name: $name, notes: $notes) {
                        id
                        themeId
                        name
                        notes
                    }
                }`,
                variables: {
                    name,
                    notes,
                    themeId
                }
            }),
            invalidatesTags: [{type: 'Meals', id: 'LIST'}],
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetAllThemesQuery, useAddThemeMutation, useGetAllMealsQuery, useAddMealMutation} = api