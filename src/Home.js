import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from './resources/eule.png'; 

const Home = (props) => {
  const { loggedIn } = props
  const navigate = useNavigate()

  const onButtonClick = () => {
    if (loggedIn) {
      navigate('/base')
    } else {
      navigate('/login')
    }
  }

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
          onClick={onButtonClick}
          value={loggedIn ? 'Go to Base' : 'Log in'}
        />
      </div>
    </div>
  )
}

export default Home