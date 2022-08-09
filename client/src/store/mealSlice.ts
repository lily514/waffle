import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {IMeal} from "../types/meal";

export type MealState = IMeal[]

const initialState: MealState = [
        {
            id: 1,
            themeId: 1,
            name: "Belgian",
            notes: "Served with fruit and whip cream"
        },
        {
            id: 2,
            themeId: 1,
            name: "Bubble",
            notes: "Served in a cone with ice cream"
        },
        {
            id: 3,
            themeId: 2,
            name: "Fish",
            notes: "Corn tortilla, white fish, sauce, slaw"
        },
        {
            id: 4,
            themeId: 2,
            name: "American Chicken",
            notes: "Flour tortilla, grilled chicken, lettuce, salsa, sour cream"
        },
        {
            id: 5,
            themeId: 2,
            name: "Street Taco",
            notes: "Corn tortilla, cilantro, onion, steak"
        },
    ]

export const mealSlice = createSlice({
    name: 'meals',
    initialState,
    reducers: {
        create: (state, action: PayloadAction<IMeal>) => {
            state.push(action.payload)
        },
        remove: (state, action: PayloadAction<number>) => {
            state.filter(m => m.id !== action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { create, remove } = mealSlice.actions

export default mealSlice.reducer