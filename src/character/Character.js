import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from './resources/eule.png'; 

const Character = (props) => {
  const { loggedIn, email } = props
  const navigate = useNavigate()

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>Furious Heroes</div>
      </div>
      <div><img src={logo} /></div>
      <div>Start your new Adventure!</div>
      <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          //onClick={onButtonClick}
          value={loggedIn ? 'Log out' : 'Log in'}
        />
        {loggedIn ? <div>Your email address is {email}</div> : <div />}
      </div>
    </div>
  )
}

export default Character