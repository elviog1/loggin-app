import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSignOutMutation } from '../features/usersApi'

export default function Header() {
  const user = JSON.parse(localStorage.getItem("user"))
  const [email,setEmail] = useState("")
  const [signout] = useSignOutMutation()
  const navigate = useNavigate()

  useEffect(()=>{
    if(user){
      setEmail(user.email)
    }
  },[setEmail])
  
  const handleSignout = ()=>{
    signout(email).then(res => {
      console.log(res)
      navigate('/')
      localStorage.removeItem('id')
      localStorage.removeItem('user')
      window.location.reload()
    })
    .catch(error => console.log(error))
  }
  return (
    <div className=' w-full fixed backdrop-blur-md'>
    {user && 
      <header className='flex justify-between text-4xl items-center flex-wrap pt-3 gap-3 max-w-6xl mx-auto my-0 font-bold'>
        <img className='object-cover w-52' src='logo.png' alt='logo login app'/>
        <div className="flex gap-3 text-2xl">
          <span className="text-rose-700 hover:text-orange-600 cursor-pointer" onClick={handleSignout}>Descontarse</span>
        </div>
      </header>
    }
  </div>
          )
}
