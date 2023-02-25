import React, { useEffect, useState } from 'react'
import Comments from '../components/Comments'
import NewComment from '../components/NewComment'
import { useAllCommentsMutation, useCreateCommentMutation, useDeleteCommentMutation } from '../features/commentsApi'

export default function CommentsPage() {
    const [postComment,{data:createData}] = useCreateCommentMutation()
    const [comments] = useAllCommentsMutation("")
    const [deleteComment,{data}] = useDeleteCommentMutation()
    const [allComments,setAllComments] = useState()
    const [refresh,setRefresh] = useState(false)

    useEffect(()=>{
      comments().then(res => {
            setAllComments(res.data)
         })
         .catch(error => console.log(error))
    },[data,createData])

    const handleDeleteComment = async(idComment)=>{
      await deleteComment(idComment)
      setRefresh(()=> {return !refresh})
    }

  return (
    <main className='flex items-center justify-center bg-blue-300 min-h-screen'>
      <div className=''>
        <h1 className='text-center font-bold text-2xl'>Comments</h1> 
        {allComments?.map((comment,index) =>(
          <Comments comments={comment} key={index} handleDeleteComment={()=>handleDeleteComment(comment._id)}  />
          ))}
        <NewComment postComment={postComment} />
      </div>
    </main>
  )
}
