import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSignUpMutation } from '../features/usersApi'

export default function SignUp() {
    const [signup] = useSignUpMutation()
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [country, setCountry] = useState("Argentina")
    const [finish,setFinish] = useState("")
    const navigate = useNavigate()

    const submitForm = (e)=>{
        e.preventDefault()
        let data = {
            name,
            lastName,
            email,
            password,
            country,
            from: 'form',
            role: 'user',
            photo: 'https://images.vexels.com/media/users/3/136558/isolated/preview/43cc80b4c098e43a988c535eaba42c53-icono-de-usuario-de-persona.png'
        }
        signup(data).then(res => {
            if(res.data.success){
                setFinish("¡ User register successfully ! Check your email.")
            }
            else{
                setFinish("User already exist")
            }
        })
    }
  return (
    <main>
        <h1>Registro</h1>
        <form onSubmit={submitForm}>
            <label>Nombre
                <input type="text" required={true} onChange={(e)=>setName(e.target.value)}/>
            </label>
            <label>Apellido
                <input type="text" required={true} onChange={(e)=>setLastName(e.target.value)}/>
            </label>
            <label>Email
                <input type="email" required={true} onChange={(e)=>setEmail(e.target.value)}/>
            </label>
            <label>Password
                <input type="password" required={true} onChange={(e)=>setPassword(e.target.value)}/>
            </label>
            <label>Country
                <select onChange={(e)=>setCountry(e.target.value)}>
                    <option>Argentina</option>
                    <option>Chile</option>
                    <option>Brasil</option>
                    <option>Paraguay</option>
                    <option>Bolivia</option>
                </select>
            </label>
            <button>Crear Cuenta</button>
        </form>
        <h2>{finish}</h2>
        <button onClick={()=> navigate("/")}>Volver</button>
        
    </main>
  )
}
