import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const api = 'https://login-app-back.onrender.com'
const local = 'http://localhost:4000'
const commentsApi = createApi({
    reducerPath: "commentsApi",
    baseQuery:fetchBaseQuery({
        baseUrl: local
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
        }),
        updateComment: build.mutation({
            query:({comment,id}) =>({
                url: `/comment/${id}`,
                method: 'PUT',
                body:comment
            })
        }),
    })
})

export default commentsApi
export const {useCreateCommentMutation,useAllCommentsMutation,useDeleteCommentMutation,useUpdateCommentMutation} = commentsApi
