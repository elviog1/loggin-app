import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Welcome() {
  const navigate = useNavigate()
  return (
    <div className="gap-2">
        <h1 className="text-5xl font-bold font-serif text-gray-900">¡ Bienvenido !</h1>
        <div className="flex justify-center gap-4 mt-5 text-xl">
          <button className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded " onClick={()=>navigate("/signin")}>Iniciar Sesion</button>
          <button className="bg-violet-600 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded "  onClick={()=>navigate("/signup")}>Registrarme</button>
        </div>
    </div>
  )
}
