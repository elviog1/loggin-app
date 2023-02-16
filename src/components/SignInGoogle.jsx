import jwtDecode from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSignInMutation } from '../features/usersApi'
export default function SignInGoogle() {
    const [signin] = useSignInMutation()
    const navigate = useNavigate()
    function handleCallbackResponse(response){
        let userObj = jwtDecode(response.credential)
        let data = {
            email: userObj.email,
            password:userObj.sub,
    }
    signin(data).then(res => {
        console.log(res)
        localStorage.setItem("user",JSON.stringify(userObj))
        navigate('/home')
    })
    }

    useEffect(()=>{
        /* global google */
        google.accounts.id.initialize({
            client_id: "233988563348-ftfff5fccl2n9035bkl2l7cgsa2cnqme.apps.googleusercontent.com",
            callback: handleCallbackResponse
        })
        google.accounts.id.renderButton(
            document.getElementById("buttonGoogle"),
            {size:"medium",logo_alignment: 'center',
            width: 250, shape: 'circle', type: 'standard'}
        )
    },[])
  return (
    <div>
        <div id="buttonGoogle"></div>
    </div>
  )
}
