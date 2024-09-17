import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Password = () => {
  const [passwordFirst, setPasswordFirst] = useState('')
  const [passwordSecond, setPasswordSecond] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()

  const navigate = useNavigate()

  const savePassword = () => {
    // Set initial error values to empty
    setPasswordError('')
  
    // Check if the user has entered both fields correctly
    if ('' === passwordFirst) {
      setPasswordError('Please enter your password')
      return
    }

    if ('' === passwordSecond) {
      setPasswordError('Please enter your password')
      return
    }
  
    if (passwordFirst.length < 7) {
      setPasswordError('The password must be 8 characters or longer')
      return
    }
  
    if (passwordFirst != passwordSecond) {
      setPasswordError('The passwords dont match')
      return
    }
  
    fetch('http://localhost:8080/api/auth/reset-password?token=' + searchParams.get("token") + '&newPassword=' + passwordFirst, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => {
        if (200 === r.status) {
          r.text().then((r) => window.alert(r))
          navigate('/')
        } else {
          r.text().then((r) => window.alert(r))
        }
      })
  }


  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Change your password</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={passwordFirst}
          type="password"
          placeholder="Enter your new password here"
          onChange={(ev) => setPasswordFirst(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={passwordSecond}
          type="password"
          placeholder="Enter your new password again"
          onChange={(ev) => setPasswordSecond(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={savePassword} value={'Save'} />
      </div>
    </div>
  )
}

export default Password