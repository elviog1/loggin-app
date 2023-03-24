import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const user = JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate()
  return (
    <main className="min-h-screen items-center bg-blue-300 flex justify-center flex-col gap-5 ">
        <h1 className='text-xl font-bold text-gray-900'>Oooooooooooooooooops !!!</h1>
        {user ? <button className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded' onClick={()=> navigate('/comments')}>Back</button> : <button className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded' onClick={()=> navigate('/signin')}>Sign in</button>}
    </main>
  )
}
