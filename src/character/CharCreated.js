import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const CharCreated = () => {
  const {state} = useLocation();
  const { avatar } = state;
  const navigate = useNavigate()

  const goToBase = () => {
    navigate('/base')
  }

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>Furious Heroes</div>
      </div>
      <div><img src={avatar} /></div>
      <div>This is your Character!</div>
      <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={goToBase}
          value= 'Go to Base'
        />
      </div>
    </div>
  )
}

export default CharCreated