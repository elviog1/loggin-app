import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FooterButton from './components/FooterButton'
import Header from './components/Header'
import CommentsPage from './pages/CommentsPage'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'


function App() {
  const user = JSON.parse(localStorage.getItem("user"))
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={user ? <CommentsPage /> :<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/comments" element={<CommentsPage />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <FooterButton/>
    </BrowserRouter>
  )
}

export default App
