import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {IMeal} from "../types/meal"
import {v4 as uuidv4} from "uuid"

export type MealState = IMeal[]

const initialState: MealState = []

export const mealSlice = createSlice({
    name: 'meals',
    initialState,
    reducers: {
        create: {
            reducer(state, action: PayloadAction<IMeal>){
                state.push(action.payload)
            },
            prepare(themeId: string, name: string, notes?: string) {
                const payload = {
                    themeId: themeId,
                    name: name,
                    notes: notes,
                    id: uuidv4()
                }
                return { payload }
            }
        },
        remove: (state, action: PayloadAction<string>) => {
            return state.filter(m => m.id !== action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const { create, remove } = mealSlice.actions

export default mealSlice.reducer