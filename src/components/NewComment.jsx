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
    <form className='flex flex-col px-4' onSubmit={sendComment}>
        <span className="text-center font-bold">{user.name}</span>
        <div className='flex'>
            <img className='rounded w-24' src={user.picture || user.photo}  />
            <textarea className="resize-none rounded w-full" onChange={(e)=> setMessage(e.target.value)}></textarea>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Enviar</button>
    </form>
  )
}
