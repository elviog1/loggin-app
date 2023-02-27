import jwtDecode from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSignUpMutation } from '../features/usersApi'
export default function SignUpGoogle() {
    const [user,setUser] = useState({})
    const [signup] = useSignUpMutation()
    const navigate = useNavigate()
    function handleCallbackResponse(response){
        console.log("token " + response.credential)
        let userObj = jwtDecode(response.credential)
        setUser(userObj)
        console.log(userObj)

        let data = {
                name: userObj.given_name,
                lastName: userObj.family_name,
                email: userObj.email,
                password:userObj.sub,
                country: "undefined",
                from: 'google',
                role: 'user',
                photo: userObj.picture
        }
        signup(data).then(res => console.log(res))
        navigate('/signin')
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
  return (
    <div className='mb-4'>
        <div id="buttonGoogle" data-context="use"></div>
    </div>
  )
}
