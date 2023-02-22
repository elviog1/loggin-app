import React from 'react'

export default function Comments(props) {
    const commentData = props.comments
  return (
    <div>
        <h3>{commentData.user.name}</h3>
        <div style={{display:"flex",alignItems:"center"}}>
            <img style={{width:'100px'}} src={commentData.user.photo} />
            <h3>{commentData.comment}</h3>
        </div>
    </div>
  )
}
