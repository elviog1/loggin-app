import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const commentsApi = createApi({
    reducerPath: "commentsApi",
    baseQuery:fetchBaseQuery({
        baseUrl: 'http://localhost:4000'
    }),
    endpoints: (build)=>({
        createComment: build.mutation({
            query:(data) =>({
                url: `/comment`,
                method: 'POST',
                body: data
            })
        }),
        AllComments: build.query({
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
export const {useCreateCommentMutation,useAllCommentsQuery,useDeleteCommentMutation} = commentsApi
