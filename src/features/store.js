import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import usersApi from "./usersApi";

export const store = configureStore({
    reducer:{
        [usersApi.reducerPath] :usersApi.reducer
    },

    middleware: (getDefaultMiddleware) =>getDefaultMiddleware({
        inmutableCheck: false,
        serializableCheck: false,
    }).concat(usersApi.middleware)
})