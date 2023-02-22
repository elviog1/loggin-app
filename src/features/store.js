import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import commentsApi from "./commentsApi";
import usersApi from "./usersApi";

export const store = configureStore({
    reducer:{
        [usersApi.reducerPath] :usersApi.reducer,
        [commentsApi.reducerPath] : commentsApi.reducer
    },

    middleware: (getDefaultMiddleware) =>getDefaultMiddleware({
        inmutableCheck: false,
        serializableCheck: false,
    }).concat(usersApi.middleware,commentsApi.middleware)
})