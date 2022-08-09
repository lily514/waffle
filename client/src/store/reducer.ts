import { configureStore } from '@reduxjs/toolkit'
import {mealSlice} from "./mealSlice";
import {themeSlice} from "./themeSlice";

const store = configureStore({
    reducer: {
        meals: mealSlice.reducer,
        themes: themeSlice.reducer,
    },
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
