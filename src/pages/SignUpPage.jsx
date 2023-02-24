import React from 'react'
import SignUpGoogle from '../components/SignUpGoogle'
import SignUp from '../components/SignUp'

export default function SignUpPage() {
  return (
    <main className='bg-blue-400 min-h-screen flex flex-col justify-center items-center'>
        <SignUp />
        <SignUpGoogle />
    </main>
  )
}
