import React, { useState } from 'react'
import { useCreateCommentMutation } from '../features/commentsApi'

export default function NewComment() {
    const [postComment] = useCreateCommentMutation()
    const [ message, setMessage] = useState("")
    const user = JSON.parse(localStorage.getItem('user'))
    const id = JSON.parse(localStorage.getItem('id'))

    const sendComment = (e)=>{
        e.preventDefault()
        let data = {
            comment: message,
            user: id
        }
        postComment(data).then(res =>{
            console.log(res)
        } )
    }
  return (
    <form onSubmit={sendComment}>
        <span>{user.name}</span>
        <div style={{display:"flex"}}>
            <img src={user.picture || user.photo} style={{width:'100px'}} />
            <textarea onChange={(e)=> setMessage(e.target.value)}></textarea>
        </div>
        <button >Enviar</button>
    </form>
  )
}
