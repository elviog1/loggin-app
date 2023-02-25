import React from 'react'
export default function Comments(props) {
    const commentData = props.comments
    const user = JSON.parse(localStorage.getItem("id"))
    const dateArray = commentData.date.split(",")
    const time = dateArray[1].slice(1,6)
    const refresh = () =>{
      props.handleDeleteComment()
    }
  return (
    <div className='flex gap-2 bg-slate-200 p-3 rounded-xl my-3 max-w-xl shadow'>
      <div>
        <img className='w-16 rounded-full' src={commentData.user.photo} alt='user picture' />
      </div>
      <div className='flex flex-col w-full'>
        <div className='flex items-center gap-2'>
        <span className='text-center font-bold text-sm'>{user === commentData.user._id ? "🙍‍♂️" : "👤"}{commentData.user.name}:</span>
        </div>
        <h3 className="px-3 font-serif max-w-xl">{commentData.comment}</h3>
        <div className='flex justify-between items-end'>
          <span className='text-gray-400 text-xs hover:text-gray-500'>{dateArray[0]} - {time}</span>
          {user === commentData.user._id && 
          <div onClick={refresh} className='p-1.5 font-bold flex cursor-pointer bg-red-400 hover:bg-red-600 rounded transition-colors'>
            <span>Delete</span>
            <img className='w-5' src='https://cdn-icons-png.flaticon.com/512/484/484611.png' alt='delete icon' />
          </div>
          }
        </div>
      </div>
    </div>
  )
}
