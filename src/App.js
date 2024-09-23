import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'
import Home from './Home'
import Login from './account/Login'
import Navbar from './Navbar'
import Character from './character/Character'
import Account from './account/Account'
import Logout from './account/Logout'
import Password from './account/Password'
import CharCreated from './character/CharCreated'
import Base from './base/Base'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    // Fetch the user email and token from local storage
    const user = JSON.parse(localStorage.getItem('user'))
  
    // If the token/email does not exist, mark the user as logged out
    if (!user || !user.token) {
      setLoggedIn(false)
      return
    }

    setLoggedIn(true)
  }, [])
    
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar loggedIn={loggedIn} />
        <Routes>
          <Route
            path="/"
            element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/character/Character" element={<Character setLoggedIn={setLoggedIn} />} />
          <Route path="/character/CharCreated" element={<CharCreated />} />
          <Route path="/src/account/Account" element={<Account setLoggedIn={setLoggedIn} />} />
          <Route path="/account/Logout" element={<Logout />} />
          <Route path="/account/PasswordReset" element={<Password />} />
          <Route path="/base" element={<Base />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App