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
  console.log(user)
  return (
    <header>
        <span>Login-APP</span>
        {user && 
          <div>
            <span>{user.name}</span>
            <span style={{color:'red',cursor:'pointer'}} onClick={handleSignout}>Descontarse</span>
          </div>
        }
    </header>
  )
}
