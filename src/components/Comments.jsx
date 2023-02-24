import React from 'react'

export default function Comments(props) {
    const commentData = props.comments
    console.log(commentData)
  return (
    <div className='mb-5 px-4'>
        <h3 className='text-center font-bold text-sm'>{commentData.user.name}</h3>
        <div className='flex items-center bg-slate-100 rounded'>
            <img className='w-24 rounded' src={commentData.user.photo} />
            <h3 className="px-3 font-serif">{commentData.comment}</h3>
        </div>
    </div>
  )
}
