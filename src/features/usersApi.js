import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const api = 'https://login-app-back.onrender.com'
const local = 'http://localhost:4000'

const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery:fetchBaseQuery({
        baseUrl: api
    }),
    endpoints:(build)=>({
        signIn:build.mutation({
            query:(data) =>({
                url: `/auth/signin`,
                method: 'POST',
                body: data
            })
        }),
        signUp:build.mutation({
            query:(data)=> ({
                url:`/auth/signup`,
                method: 'POST',
                body:data
            })
        }),
        signOut: build.mutation({
            query:(data)=> ({
                url:`/auth/signout/${data}`,
                method: 'POST'
            })
        })
    })
})

export default usersApi
export const {useSignInMutation,useSignUpMutation,useSignOutMutation} = usersApi