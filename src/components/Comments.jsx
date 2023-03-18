import React from 'react'
import ImageWithModal from './ImageWithModal'
export default function Comments(props) {
    const commentData = props.comments
    const id = JSON.parse(localStorage.getItem("id"))
    const dateArray = commentData.date.split(",")
    const time = dateArray[1]
    const refresh = () =>{
      props.handleDeleteComment()
    }
  return (
    <div className='flex gap-2 bg-slate-200 p-3 rounded-xl my-3 max-w-xl shadow mx-2'>
        <ImageWithModal 
          imageSrc={commentData.user.photo} 
          name={commentData.user.name} 
          lastName={commentData.user.lastName} 
          email={commentData.user.email} 
          country={commentData.user.country} 
          role={commentData.user.role} 
        />
      <div className='flex flex-col w-full '>
        <div className='flex items-center gap-2'>
        <label htmlFor="my-modal-3" className='font-bold text-xl cursor-pointer'>{commentData.user.name}:</label>
        </div>
        <div className="px-3 font-serif max-w-xl overflow-auto">{commentData.comment}</div>
        <div className='flex justify-between items-end'>
          <span className='text-gray-400 text-xs hover:text-gray-500'>{dateArray[0]} - {time}</span>
          {id === commentData.user._id && 
          <div onClick={refresh} className='btn bg-red-400 border-none hover:bg-red-600 font-bold gap-1 transition-colors'>
            <img className='w-5' src='https://cdn-icons-png.flaticon.com/512/484/484611.png' alt='delete icon' />
          </div>
          }
        </div>
      </div>
    </div>
  )
}
