import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function Account(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [nameError, setNameError] = useState('')

  const navigate = useNavigate()

  const onButtonClick = () => {
      // Set initial error values to empty
      setNameError('')
      setEmailError('')
      setPasswordError('')

      if (password && password.length < 7) {
        setPasswordError('The password must be 8 characters or longer')
        return
      }

        
    if (email && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email')
      return
    }

    fetch('http://localhost:8080/api/user/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
      body: JSON.stringify({ newEmail: email, newUsername: name, newPassword: password }),
    })
      .then((r) => r.text())
      .then((r) => {
          window.alert(r)
        })

  }

  const logout = () => {
    // Set initial error values to empty
    setNameError('')
    setEmailError('')
    setPasswordError('')
    localStorage.removeItem('user')
    props.setLoggedIn(false)
    navigate('/')
}
  
  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Change your credentials</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="Change your email"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Change your password"
          type="password"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
      <input
          value={name}
          placeholder="Change your username"
          onChange={(ev) => setName(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{nameError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Update'} />
      </div>
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={logout} value={'Log Out'} />
      </div>
    </div>
  );
}
