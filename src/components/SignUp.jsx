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
                setCodeBool(false)
            }
        })
    }
    console.log(code)
  return (
    <main className='flex flex-col items-center text-xl gap-2'>
        <h1 className='font-bold text-2xl'>Registro</h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitForm}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                    Nombre
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id='name' type="text" required={true} name="name" onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="lastname">
                    Apellido
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id='lastname' type="text" required={true} name="lastname" onChange={(e)=>setLastName(e.target.value)}/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id='email' type="email" required={true} name="email" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id='password' type="password" required={true} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="country">
                    Country
                </label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id='country' onChange={(e)=>setCountry(e.target.value)}>
                    <option>Argentina</option>
                    <option>Chile</option>
                    <option>Brasil</option>
                    <option>Paraguay</option>
                    <option>Bolivia</option>
                </select>
            </div>
            <div className="flex justify-between">
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={()=> navigate("/")}>Volver</button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Crear Cuenta</button>
            </div>
            {codeBool ? <h2 className="text-green-700 text-center">{finish}</h2> : <h2 className="text-red-700 text-center">{finish}</h2>}
            {/* <h2>{finish}</h2> */}
        </form>
        {codeBool && <a className="font-bold text-yellow-500 hover:text-orange-500 mb-3" href='https://mail.google.com'>Click Here to Active your account</a>}
    </main>
  )
}
