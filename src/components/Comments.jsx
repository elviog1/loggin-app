import React from 'react'
export default function Comments(props) {
    const commentData = props.comments
    const user = JSON.parse(localStorage.getItem("id"))

    const refresh = () =>{
      props.handleDeleteComment()
    }

  return (
    <div className='mb-5 px-4 shadow-lg hover:shadow-2xl'>
        <h3 className='text-center font-bold text-sm'>{commentData.user.name}</h3>
        <div className='flex items-center bg-slate-100 rounded'>
            <img className='w-24 rounded' src={commentData.user.photo} alt='user picture' />
            <h3 className="px-3 font-serif">{commentData.comment}</h3>
        </div>
        <div className='flex justify-between items-end'>
          <h4 className="text-end text-gray-500">{commentData.date}</h4>
          {user === commentData.user._id && 
          <img onClick={refresh} className='w-8 cursor-pointer bg-red-400 hover:bg-red-600 rounded p-0.5' src='https://cdn-icons-png.flaticon.com/512/484/484611.png' alt='delete icon' />
          }
          
        </div>
    </div>
  )
}
