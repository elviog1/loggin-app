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
  },[])
  const handleSignout = ()=>{
    signout(email).then(res => {
      console.log(res)
      navigate('/')
      localStorage.removeItem('user')
      localStorage.removeItem('id')
    })

  }
  // console.log(user)
  return (
      <>
    {user && 
    <header className="flex justify-between font-medium p-4 bg-blue-300">
        <span className="text-3xl font-serif">Login - APP</span>
          <div className="flex gap-3 text-2xl">
            <span>{user.name}</span>
            <span className="text-rose-700 cursor-pointer" onClick={handleSignout}>Descontarse</span>
          </div>
          </header>
        }
        </>
          )
}
