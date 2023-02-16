import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSignInMutation } from '../features/usersApi'
import SignInGoogle from './SignInGoogle'

export default function SignIn() {
    const navigate = useNavigate()
    const [signin] = useSignInMutation()
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [finish,setFinish] = useState("")

    const loggin = (e)=>{
        e.preventDefault()
        let data={
            email,
            password,
            from: 'form'
        }
        signin(data).then(res =>{
        if(res.data.success){
            const user = res.data.response.loginUser
            console.log(user)
            localStorage.setItem("user",JSON.stringify(user))
            setFinish("Loading...")
            setTimeout(()=>{
                navigate("/home")
            },1000)
        }
        }).catch(error =>{
            setFinish("Error")
        })
    }
  return (
    <main>
        <h1>Iniciar sesion</h1>
        <form onSubmit={loggin}>
            <label>Email
                <input type="email" required={true} onChange={(e)=>setEmail(e.target.value)} />
            </label>
            <label>
                <input type="password" required={true} onChange={(e)=>setPassword(e.target.value)}/>
            </label>
            <button>Ingresar</button>
        </form>
        <h2>{finish}</h2>
        <button onClick={()=> navigate('/')}>Volver</button>
        <SignInGoogle />
    </main>
  )
}
