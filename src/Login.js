import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [usernameL, setUsernameL] = useState('')
  const [passwordL, setPasswordL] = useState('')
  const [usernameR, setUsernameR] = useState('')
  const [passwordR, setPasswordR] = useState('')
  const [emailError, setEmailError] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate()

  const loginUser = () => {
    // Set initial error values to empty
    setUsernameError('')
    setPasswordError('')
  
    // Check if the user has entered both fields correctly
    if ('' === usernameL) {
      setUsernameError('Please enter your username')
      return
    }
  
    if ('' === passwordL) {
      setPasswordError('Please enter a password')
      return
    }
  
    logIn(usernameL, passwordL)
  }

  const registerUser = () => {
    // Set initial error values to empty
    setUsernameError('')
    setEmailError('')
    setPasswordError('')
  
    // Check if the user has entered both fields correctly
    if ('' === usernameR) {
      setUsernameError('Please enter your username')
      return
    }

    if ('' === email) {
      setEmailError('Please enter your email')
      return
    }
  
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email')
      return
    }
  
    if ('' === passwordR) {
      setPasswordError('Please enter a password')
      return
    }
  
    if (passwordR.length < 7) {
      setPasswordError('The password must be 8 characters or longer')
      return
    }
  
    
    // Check if email has an account associated with it
    register()
  }

  // Call the server API to check if the given email ID already exists
const register = () => {
    fetch('http://localhost:8080/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, username: usernameR, password: passwordR }),
    })
      .then((r) => {
        if (200 === r.status) {
          logIn(usernameR, passwordR)
        } else {
          r.text().then((r) => window.alert(r))
        }
      })
  }
  
  // Log in a user using email and password
  const logIn = (username, password) => {
    fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((r) => {
        if (200 === r.status) {
          r.json().then((r) => {
            localStorage.setItem('user', JSON.stringify({ userId: r.userId, token: r.accessToken }))
            props.setLoggedIn(true)
            props.setEmail(email)
            navigate('/character/Character')
          })
        } else {
          window.alert("Wrong username or password")
        }
      })
  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={usernameL}
          placeholder="Enter your username here"
          onChange={(ev) => setUsernameL(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{usernameError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={passwordL}
          type="password"
          placeholder="Enter your password here"
          onChange={(ev) => setPasswordL(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={loginUser} value={'Log in'} />
      </div>
      <div className={'titleContainer'}>
        <div>Register</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={usernameR}
          placeholder="Enter your username here"
          onChange={(ev) => setUsernameR(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{usernameError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={passwordR}
          type="password"
          placeholder="Enter your password here"
          onChange={(ev) => setPasswordR(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={registerUser} value={'Register'} />
      </div>
    </div>
  )
}

export default Login