import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Welcome() {
  const navigate = useNavigate()
  return (
    <div>
        <h1>¡ Bienvenido !</h1>
        <button onClick={()=>navigate("/signin")}>Iniciar Sesion</button>
        <button onClick={()=>navigate("/signup")}>Registrarme</button>
    </div>
  )
}
