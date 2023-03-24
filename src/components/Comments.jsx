import axios from 'axios'
import React, { useState,useEffect } from 'react'
import ImageWithModal from './ImageWithModal'
export default function Comments(props) {
    const commentData = props.comments
    const [commentMessage,setCommentMessage] = useState(commentData.comment)
    const id = JSON.parse(localStorage.getItem("id"))
    const dateArray = commentData.date.split(",")
    const time = dateArray[1]
    const [editClick,setEditClick] = useState(false)
    const [updateText,setUpdateText] = useState("")
    
    const refresh = () =>{
      props.handleDeleteComment()
    }
    const editButton = ()=>{
      setEditClick(!editClick)
    }

    useEffect(()=>{
      
    },[commentMessage])

    const handleUpdateComment = ()=>{
      const data = {
        comment:updateText
      }
      axios.put(`https://login-app-back.onrender.com/comment/${commentData._id}`,data)
      .then(res => {
        setCommentMessage(updateText)
        setEditClick(!editClick)
      })
      .catch(e => console.log(e))
    }

  return (
    <div>

    <div className='flex gap-2 bg-slate-200 p-3 rounded-xl my-3 max-w-xl shadow mx-2'>
        <ImageWithModal 
          imageSrc={commentData.user.photo} 
          name={commentData.user.name} 
          lastName={commentData.user.lastName} 
          email={commentData.user.email} 
          country={commentData.user.country} 
          role={commentData.user.role} 
        />
      <div className='flex flex-col w-full justify-between'>
        <div className='flex justify-between items-center gap-2'>
          <label htmlFor="my-modal-3" className='font-bold text-gray-900 text-xl cursor-pointer'>{commentData.user.name}:</label>
        </div>
        <div className="px-3 font-serif max-w-xl overflow-auto text-gray-700">{commentMessage}</div>
        <div className='flex justify-between items-end'>
          <span className='text-gray-400 text-xs hover:text-gray-500'>{dateArray[0]} - {time}</span>
          {id === commentData.user._id && 
          <div className='gap-2 flex'>
            {/* EDIT  */}
            <div onClick={editButton} className='btn bg-blue-400 border-none hover:bg-blue-600 font-bold gap-1 transition-colors'>
              <img className='w-5' src='https://cdn-icons-png.flaticon.com/512/3197/3197021.png' alt='delete icon' />
            </div>
            {/* DELETE  */}
            <div onClick={refresh} className='btn bg-red-400 border-none hover:bg-red-600 font-bold gap-1 transition-colors'>
              <img className='w-5' src='https://cdn-icons-png.flaticon.com/512/484/484611.png' alt='delete icon' />
            </div>
          </div>
          }
        </div>
      </div>
    </div>

    {editClick && 
    <div className='flex p-3 rounded-xl my-3 max-w-xl shadow mx-2 gap-2'>
      <textarea onChange={(e)=>setUpdateText(e.target.value)} maxLength={500} className=" resize-none rounded w-full  px-3 pt-1 placeholder-gray-600 bg-gray-300 text-gray-900" ></textarea>
      <button onClick={handleUpdateComment} className='bg-blue-500 hover:bg-blue-600 hover:text-gray-50 font-bold text-gray-900 border-none btn' >Enviar</button>
    </div>
    }
            </div>
  )
}
