import React from 'react'
import SignIn from '../components/SignIn'
import SignInGoogle from '../components/SignInGoogle'

export default function SignInPage() {
  return (
    <main className='bg-blue-300 min-h-screen flex flex-col justify-center items-center'>
        <SignIn />
        <SignInGoogle />
    </main>
  )
}
