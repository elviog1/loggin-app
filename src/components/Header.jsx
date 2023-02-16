import React from 'react'

export default function Header() {
  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <header>
        <span>{user.name}</span>
        <span>Descontarse</span>
      </header>
  )
}
