import React, { useEffect, useState } from 'react'

export default function FooterButton() {
    const scrollup = ()=>{
        window.scrollTo({
            behavior:"smooth",
            top:0
        })
    }
  return (
    <div className='bg-blue-300 h-20'>
        <img src='https://cdn-icons-png.flaticon.com/512/404/404673.png' alt='cohete' className='w-20 absolute right-20 bottom-auto cursor-pointer' onClick={scrollup} />
    </div>
  )
}
