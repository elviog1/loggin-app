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
    <main>
        <h1>Comments</h1> 
        {allComments?.map((comment,index) =>(
          <Comments comments={comment} key={index}  />
        ))}
        <NewComment />
    </main>
  )
}
