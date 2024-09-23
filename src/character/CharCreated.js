import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const CharCreated = () => {
  const {state} = useLocation();
  const { avatar } = state;
  const navigate = useNavigate()

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>Furious Heroes</div>
      </div>
      <div><img src={avatar} /></div>
      <div>Start your new Adventure!</div>
      <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={navigate('/base')}
          value= 'Go to Base'
        />
      </div>
    </div>
  )
}

export default CharCreated