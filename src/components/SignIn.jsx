import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSignInMutation } from '../features/usersApi'

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
            localStorage.setItem("id",JSON.stringify(user.id))
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
    <main className='flex flex-col items-center text-xl gap-2'>
        <h1 className='font-bold text-2xl'>Iniciar sesion</h1>
        <form onSubmit={loggin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" required={true} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" id='password' required={true} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="flex justify-between">
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={()=> navigate('/')}>Volver</button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Ingresar</button>
            </div>
        </form>
        <h2>{finish}</h2>
    </main>
  )
}
