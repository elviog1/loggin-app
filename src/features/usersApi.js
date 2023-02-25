import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery:fetchBaseQuery({
        baseUrl: "https://login-app-back.onrender.com"
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