import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import CommentsPage from './pages/CommentsPage'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/*' element={<NotFound />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/comments" element={<CommentsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
