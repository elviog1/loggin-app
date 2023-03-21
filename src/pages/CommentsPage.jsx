import React, { useEffect, useState } from 'react'
import Comments from '../components/Comments'
import Loading from '../components/Loading'
import NewComment from '../components/NewComment'
import { useAllCommentsMutation, useCreateCommentMutation, useDeleteCommentMutation } from '../features/commentsApi'

export default function CommentsPage() {
    const [postComment,{data:createData}] = useCreateCommentMutation()
    const [comments] = useAllCommentsMutation("")
    const [deleteComment,{data}] = useDeleteCommentMutation()
    const [allComments,setAllComments] = useState()
    const [refresh,setRefresh] = useState(false)
    const user = JSON.parse(localStorage.getItem("user"))


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
    <main className='flex items-center justify-center bg-blue-300 min-h-screen pt-20'>
      <div className='my-5 '>
        <h1 className='text-center font-bold text-3xl font-serif text-gray-900'>¡ Hola <span className='text-3xl text-red-500'>{user.name}</span> !</h1> 
        {allComments === undefined ? 
          <div className='flex justify-center m-4'>
            <Loading /> 
          </div>
            :
          allComments?.map((comment,index) =>(
            <Comments comments={comment} key={index} handleDeleteComment={()=>handleDeleteComment(comment._id)}  />
            ))
        }
        <NewComment postComment={postComment} />
      </div>
    </main>
  )
}
