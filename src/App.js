import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import Character from './character/Character'
import Account from './account/Account'
import Logout from './account/Logout'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    // Fetch the user email and token from local storage
    const user = JSON.parse(localStorage.getItem('user'))
  
    // If the token/email does not exist, mark the user as logged out
    if (!user || !user.token) {
      setLoggedIn(false)
      return
    }
  
    // If the token exists, verify it with the auth server to see if it is valid
    fetch('http://localhost:3080/verify', {
      method: 'POST',
      headers: {
        'jwt-token': user.token,
      },
    })
      .then((r) => r.json())
      .then((r) => {
        setLoggedIn('success' === r.message)
        setEmail(user.email || '')
      })
  }, [])
    
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/character/Character" element={<Character />} />
          <Route path="/src/account/Account" element={<Account />} />
          <Route path="/account/Logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App