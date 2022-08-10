import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {ITheme} from "../types/theme";
import {v4 as uuidv4} from 'uuid';

export type ThemeState = ITheme[]

const initialState: ThemeState = [
    {
        id: "1",
        name: "waffles"
    },
    {
        id: "2",
        name: "tacos"
    }
]

export const themeSlice = createSlice({
    name: 'themes',
    initialState,
    reducers: {
        create: {
            reducer(state, action: PayloadAction<ITheme>) {
                state.push(action.payload)
            },
            prepare(name: string) {
                return {
                    payload: {
                        name: name,
                        id: uuidv4()
                    }
                }
            }
        },
        remove: (state, action: PayloadAction<string>) => {
            return state.filter(m => m.id !== action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const {create, remove} = themeSlice.actions

export default themeSlice.reducer