import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Welcome from './components/Welcome'
import CommentsPage from './pages/CommentsPage'


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<CommentsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
