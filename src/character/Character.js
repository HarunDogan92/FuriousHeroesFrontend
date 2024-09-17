import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Character = (props) => {
  const [role, setRole] = useState('')
  const navigate = useNavigate()

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>Tell us about yourself</div>
      </div>
      <br />
      <br />
      <div className={'subTitleContainer'}>Which class would you identify with:</div>
      <br />
      <div className="radio">
          <label>
            <input
              type="radio"
              value="Warrior"
              checked={role === "Warrior"}
              onChange={(e) => setRole("Warrior")}
            />
            Warrior
          </label>
          <label>
            <input
              type="radio"
              value="Hunter"
              checked={role === "Hunter"}
              onChange={(e) => setRole("Hunter")}
            />
            Hunter
          </label>
          <label>
            <input
              type="radio"
              value="Mage"
              checked={role === "Mage"}
              onChange={(e) => setRole("Mage")}
            />
            Mage
          </label>
      </div>
    </div>
  )
}

export default Character