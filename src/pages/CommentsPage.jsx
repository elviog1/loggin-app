import React, { useEffect, useState } from 'react'
import Comments from '../components/Comments'
import NewComment from '../components/NewComment'
import { useAllCommentsQuery } from '../features/commentsApi'

export default function CommentsPage() {
    const {data} = useAllCommentsQuery("")
    const [allComments,setAllComments] = useState([])

    useEffect(()=>{
        if(data){
            setAllComments(data)
        }
    },[data])
    console.log(data)   
  return (
    <main className='flex items-center justify-center bg-blue-300 min-h-screen'>
      <div className=''>
        <h1 className='text-center font-bold text-2xl'>Comments</h1> 
        {allComments?.map((comment,index) =>(
          <Comments comments={comment} key={index}  />
          ))}
        <NewComment />
          </div>
    </main>
  )
}
