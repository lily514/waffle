import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {ITheme} from "../types/theme";

export type ThemeState = ITheme[]

const initialState: ThemeState = [
        {
            id: 1,
            name: "waffles"
        },
        {
            id: 2,
            name: "tacos"
        }
    ]

export const themeSlice = createSlice({
    name: 'themes',
    initialState,
    reducers: {
        create: (state, action: PayloadAction<ITheme>) => {
            state.push(action.payload)
        },
        remove: (state, action: PayloadAction<number>) => {
            return state.filter(m => m.id !== action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { create, remove } = themeSlice.actions

export default themeSlice.reducer