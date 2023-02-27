import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSignOutMutation } from '../features/usersApi'

export default function Header() {
  const user = JSON.parse(localStorage.getItem("user"))
  const [email,setEmail] = useState("")
  const [signout] = useSignOutMutation()
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(()=>{
    if(user){
      setEmail(user.email)
    }
  },[])
  const handleSignout = ()=>{
    signout(email).then(res => {
      console.log(res)
      navigate('/')
      setTimeout(()=>{
        localStorage.removeItem('user')
        localStorage.removeItem('id')
      },3000)
    })
  }
  return (
      <>
    {user && 
    <header className={`fixed w-full top-0 h-20 flex justify-between font-medium p-4 bg-blue-400 duration-500 transition-all ease-in-out ${isScrolled && 'bg-transparent'}` } >
        <img className='object-cover ' src='logo.png' alt='logo login app'/>
          <div className="flex gap-3 text-2xl">
            <span>{user.name}</span>
            <span className="text-rose-700 hover:text-orange-600 cursor-pointer" onClick={handleSignout}>Descontarse</span>
          </div>
          </header>
        }
        </>
          )
}
