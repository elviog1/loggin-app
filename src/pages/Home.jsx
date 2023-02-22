import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BoxComment from '../components/BoxComment'
import { useSignOutMutation } from '../features/usersApi'

export default function Home() {
  const [email,setEmail] = useState("")
  const [user,setUser] = useState()
  const [signout] = useSignOutMutation()
  const userLS = JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate()
  
  useEffect(()=>{
    if(userLS){
      setEmail(userLS.email)
    }
  },[])

  const signOut = ()=>{
    signout(email).then(res => {
      navigate('/')
      localStorage.removeItem("id")
      localStorage.removeItem("user")
      console.log(res)
    })
  }

  const Header = ()=>{
    return (
      <header>
        <span>{userLS.name}</span>
        <span style={{cursor:"pointer",color:"red"}} onClick={signOut}>Descontarse</span>
      </header>
    )
  }
  return (
    <main>
        <Header />
        <h1>Comentarios</h1>
        <BoxComment />
    </main>
  )
}
