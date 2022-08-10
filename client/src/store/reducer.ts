import { configureStore } from '@reduxjs/toolkit'
import {mealSlice} from "./mealSlice";
import {themeSlice} from "./themeSlice";
import {api} from './api';

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        meals: mealSlice.reducer,
        themes: themeSlice.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
