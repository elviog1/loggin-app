import React from 'react'

export default function BoxComment() {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    return (
    <form>
        <span>{user.name}</span>
        <div>
            <img src={user.picture} />
            <p>Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        </div>
        <button>Enviar</button>
    </form>
  )
}
