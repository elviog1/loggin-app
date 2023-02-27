import jwtDecode from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSignInMutation } from '../features/usersApi'
import Loading from './Loading'
export default function SignInGoogle() {
    const [signin] = useSignInMutation()
    const navigate = useNavigate()
    const [logged,setLogged] = useState(false)
    function handleCallbackResponse(response){
        let userObj = jwtDecode(response.credential)
        let data = {
            email: userObj.email,
            password:userObj.sub,
    }
    setLogged(!logged)
    signin(data).then(res => {
        console.log(res)
        localStorage.setItem("user",JSON.stringify(userObj))
        localStorage.setItem("id",JSON.stringify(res.data.response.id))
        navigate('/comments')
    })
    }

    useEffect(()=>{
        /* global google */
        google.accounts.id.initialize({
            client_id: "1048431450645-lohsbvbpr38semovoqo1s09e0g5maabh.apps.googleusercontent.com",
            callback: handleCallbackResponse
        })
        google.accounts.id.renderButton(
            document.getElementById("buttonGoogle"),
            {size:"medium",logo_alignment: 'center',
            width: 250, shape: 'circle', type: 'standard'}
        )
    },[])
    const searching = ()=>{
        setLogged(!logged)
    }
  return (
    <div className='flex flex-col items-center gap-4'>
        <div  id="buttonGoogle"></div>
        {logged && <Loading />}
    </div>
  )
}
