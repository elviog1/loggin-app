import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSignUpMutation } from '../features/usersApi'
import SignUpGoogle from './SignUpGoogle'
export default function SignUp() {
    const [signup] = useSignUpMutation()
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [country, setCountry] = useState("Argentina")
    const [finish,setFinish] = useState("")
    const [code,setCode] = useState("")
    const [codeBool,setCodeBool] = useState(false)
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
                console.log(res.data)
                setFinish("¡ User register successfully !")
                setCode(res.data.code)
                setCodeBool(true)
            }
            else{
                setFinish("User already exist")
            }
        })
    }
    console.log(code)
  return (
    <main>
        <h1>Registro</h1>
        <form onSubmit={submitForm}>
            <label>Nombre
                <input type="text" required={true} name="name" onChange={(e)=>setName(e.target.value)}/>
            </label>
            <label>Apellido
                <input type="text" required={true} name="lastname" onChange={(e)=>setLastName(e.target.value)}/>
            </label>
            <label>Email
                <input type="email" required={true} name="email" onChange={(e)=>setEmail(e.target.value)}/>
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
            <h2>{finish}</h2>
        </form>
        {codeBool && <a href='https://mail.google.com'>Click Here to Active your account</a>}
        <button onClick={()=> navigate("/")}>Volver</button>
        <SignUpGoogle />
    </main>
  )
}
