import React, { useRef, useState } from 'react'
export default function NewComment({postComment}) {
    const [ message, setMessage] = useState("")
    const user = JSON.parse(localStorage.getItem('user'))
    const id = JSON.parse(localStorage.getItem('id'))
    const textareaRef = useRef()
    const sendComment = (e)=>{
        e.preventDefault()
        let data = {
            comment: message,
            user: id,
            date: new Date().toLocaleString(),
            likes: []
        }
        postComment(data).then(res =>{
            console.log(res)
            textareaRef.current.value = ""
        } )
    }
  return (
    <form className='bg-slate-200 rounded-xl p-3 mx-2 flex gap-2 items-center shadow' onSubmit={sendComment}>
        <div>
            <img className='rounded-full w-16' src={user.picture || user.photo} alt='user picture' />
        </div>
        <div className='w-full'>
            <textarea maxLength={500} ref={textareaRef} className=" resize-none rounded w-full  px-3 pt-1 placeholder-gray-600 bg-gray-300 text-gray-900" onChange={(e)=> setMessage(e.target.value)} placeholder="Dejame un comentario para que leamos :D"></textarea>
        </div>
        <div>
            <button className="bg-blue-500 hover:bg-blue-600 hover:text-gray-50 font-bold text-gray-900 border-none btn">Enviar</button>
        </div>
    </form>
  )
}
