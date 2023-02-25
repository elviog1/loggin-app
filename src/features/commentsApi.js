import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const commentsApi = createApi({
    reducerPath: "commentsApi",
    baseQuery:fetchBaseQuery({
        baseUrl: 'https://login-app-back.onrender.com'
    }),
    endpoints: (build)=>({
        createComment: build.mutation({
            query:(data) =>({
                url: `/comment`,
                method: 'POST',
                body: data
            })
        }),
        AllComments: build.mutation({
            query: ()=>`/comment`,
            transformResponse: res => res.response
        }),
        deleteComment: build.mutation({
            query:(id) =>({
                url: `/comment/${id}`,
                method: 'DELETE'
            })
        })
    })
})

export default commentsApi
export const {useCreateCommentMutation,useAllCommentsMutation,useDeleteCommentMutation} = commentsApi
