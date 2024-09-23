import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import warrior from '../resources/warrior.png'; 
import hunter from '../resources/hunter.png'; 
import mage from '../resources/mage.png'; 
import warriorSel from '../resources/warrior-selected.png'; 
import hunterSel from '../resources/hunter-selected.png'; 
import mageSel from '../resources/mage-selected.png'; 
import green from '../resources/green.png'; 
import blue from '../resources/blue.png'; 
import red from '../resources/red.png'; 
import greenSel from '../resources/green-selected.png'; 
import blueSel from '../resources/blue-selected.png'; 
import redSel from '../resources/red-selected.png'; 
import round from '../resources/round.png'; 
import thin from '../resources/thin.png'; 
import pupilles from '../resources/pupilles.png'; 
import roundSel from '../resources/round-selected.png'; 
import thinSel from '../resources/thin-selected.png'; 
import pupillesSel from '../resources/pupilles-selected.png'; 
import plate from '../resources/plate.png'; 
import leather from '../resources/leather.png'; 
import robe from '../resources/robe.png'; 
import plateSel from '../resources/plate-selected.png'; 
import leatherSel from '../resources/leather-selected.png'; 
import robeSel from '../resources/robe-selected.png'; 
import sword from '../resources/sword.png'; 
import axe from '../resources/axe.png'; 
import bow from '../resources/bow.png'; 
import swordSel from '../resources/sword-selected.png'; 
import axeSel from '../resources/axe-selected.png'; 
import bowSel from '../resources/bow-selected.png'; 
import mountain from '../resources/mountain.png'; 
import jungle from '../resources/jungle.png'; 
import beach from '../resources/beach.png'; 
import mountainSel from '../resources/mountain-selected.png'; 
import jungleSel from '../resources/jungle-selected.png'; 
import beachSel from '../resources/beach-selected.png'; 

const Character = (props) => {
  const [role, setRole] = useState('')
  const [color, setColor] = useState('')
  const [eyeShape, setEyeShape] = useState('')
  const [eyeColor, setEyeColor] = useState('')
  const [clothing, setClothing] = useState('')
  const [weapon, setWeapon] = useState('')
  const [hobby, setHobby] = useState('')
  const [vacation, setVacation] = useState('')

  const navigate = useNavigate()
  const {state} = useLocation();
  const { username, password, email } = state;

  const registerUser = () => {
    fetch('http://localhost:8080/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, username, password, type: role,
        owlColor: color, eyeShape: eyeShape, eyeColor: eyeColor, clothing: clothing, weapon: weapon,
        hobby: hobby, vacationSpot: vacation }),
    })
      .then((r) => {
        if (200 === r.status) {
          logIn(username, password)
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
              localStorage.setItem('userId', r.userId)
              localStorage.setItem('token', r.accessToken )
              localStorage.setItem('avatar', r.avatarImage)
              props.setLoggedIn(true)
              navigate('/character/CharCreated', {state: {avatar : r.avatarImage}})
            })
          } else {
            window.alert("Wrong username or password")
          }
        })
    }


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
            <img src={role === "Warrior" ? warriorSel : warrior} alt="Option 1"></img>
          </label>
          {' '}
          <label>
            <input
              type="radio"
              value="Hunter"
              checked={role === "Hunter"}
              onChange={(e) => setRole("Hunter")}
            />
            <img src={role === "Hunter" ? hunterSel : hunter} alt="Option 2"></img>
          </label>
          {' '}
          <label>
            <input
              type="radio"
              value="Mage"
              checked={role === "Mage"}
              onChange={(e) => setRole("Mage")}
            />
            <img src={role === "Mage" ? mageSel : mage} alt="Option 3"></img>
          </label>
      </div>
      <br />
      <div className={'subTitleContainer'}>What is your favorite color:</div>
      <br />
      <div className="radio">
          <label>
            <input
              type="radio"
              value="Green"
              checked={color === "Green"}
              onChange={(e) => setColor("Green")}
            />
            <img src={color === "Green" ? greenSel : green} alt="Option 1"></img>
          </label>
          {' '}
          <label>
            <input
              type="radio"
              value="Blue"
              checked={color === "Blue"}
              onChange={(e) => setColor("Blue")}
            />
            <img src={color === "Blue" ? blueSel : blue} alt="Option 2"></img>
          </label>
          {' '}
          <label>
            <input
              type="radio"
              value="Red"
              checked={color === "Red"}
              onChange={(e) => setColor("Red")}
            />
            <img src={color === "Red" ? redSel : red} alt="Option 3"></img>
          </label>
      </div>
      <br />
      <div className={'subTitleContainer'}>Eye Shape:</div>
      <br />
      <div className="radio">
          <label>
            <input
              type="radio"
              value="Round"
              checked={eyeShape === "Round"}
              onChange={(e) => setEyeShape("Round")}
            />
            <img src={eyeShape === "Round" ? roundSel : round} alt="Option 1"></img>
          </label>
          {' '}
          <label>
            <input
              type="radio"
              value="Thin"
              checked={eyeShape === "Thin"}
              onChange={(e) => setEyeShape("Thin")}
            />
            <img src={eyeShape === "Thin" ? thinSel : thin} alt="Option 2"></img>
          </label>
          {' '}
          <label>
            <input
              type="radio"
              value="No Pupil"
              checked={eyeShape === "No Pupil"}
              onChange={(e) => setEyeShape("No Pupil")}
            />
            <img src={eyeShape === "No Pupil" ? pupillesSel : pupilles} alt="Option 3"></img>
          </label>
      </div>
      <br />
      <div className={'subTitleContainer'}>Eye Color:</div>
      <br />
      <div className="radio">
          <label>
            <input
              type="radio"
              value="Red"
              checked={eyeColor === "Red"}
              onChange={(e) => setEyeColor("Red")}
            />
            <img src={eyeColor === "Red" ? redSel : red} alt="Option 1"></img>
          </label>
          {' '}
          <label>
            <input
              type="radio"
              value="Blue"
              checked={eyeColor === "Blue"}
              onChange={(e) => setEyeColor("Blue")}
            />
            <img src={eyeColor === "Blue" ? blueSel : blue} alt="Option 2"></img>
          </label>
          {' '}
          <label>
            <input
              type="radio"
              value="Green"
              checked={eyeColor === "Green"}
              onChange={(e) => setEyeColor("Green")}
            />
            <img src={eyeColor === "Green" ? greenSel : green} alt="Option 3"></img>
          </label>
      </div>
      <br />
      <div className={'subTitleContainer'}>Clothing:</div>
      <br />
      <div className="radio">
          <label>
            <input
              type="radio"
              value="Plate"
              checked={clothing === "Plate"}
              onChange={(e) => setClothing("Plate")}
            />
            <img src={clothing === "Plate" ? plateSel : plate} alt="Option 1"></img>
          </label>
          {' '}
          <label>
            <input
              type="radio"
              value="Leather"
              checked={clothing === "Leather"}
              onChange={(e) => setClothing("Leather")}
            />
            <img src={clothing === "Leather" ? leatherSel : leather} alt="Option 2"></img>
          </label>
          {' '}
          <label>
            <input
              type="radio"
              value="Robe"
              checked={clothing === "Robe"}
              onChange={(e) => setClothing("Robe")}
            />
            <img src={clothing === "Robe" ? robeSel : robe} alt="Option 3"></img>
          </label>
      </div>
      <br />
      <div className={'subTitleContainer'}>Weapon:</div>
      <br />
      <div className="radio">
          <label>
            <input
              type="radio"
              value="Sword"
              checked={weapon === "Sword"}
              onChange={(e) => setWeapon("Sword")}
            />
            <img src={weapon === "Sword" ? swordSel : sword} alt="Option 1"></img>
          </label>
          {' '}
          <label>
            <input
              type="radio"
              value="Axe"
              checked={weapon === "Axe"}
              onChange={(e) => setWeapon("Axe")}
            />
            <img src={weapon === "Axe" ? axeSel : axe} alt="Option 2"></img>
          </label>
          {' '}
          <label>
            <input
              type="radio"
              value="Bow"
              checked={weapon === "Bow"}
              onChange={(e) => setWeapon("Bow")}
            />
            <img src={weapon === "Bow" ? bowSel : bow} alt="Option 3"></img>
          </label>
      </div>
      <br />
      <div className={'subTitleContainer'}>Vacation:</div>
      <br />
      <div className="radio">
          <label>
            <input
              type="radio"
              value="Mountain"
              checked={vacation === "Mountain"}
              onChange={(e) => setVacation("Mountain")}
            />
            <img src={vacation === "Mountain" ? mountainSel : mountain} alt="Option 1"></img>
          </label>
          {' '}
          <label>
            <input
              type="radio"
              value="Jungle"
              checked={vacation === "Jungle"}
              onChange={(e) => setVacation("Jungle")}
            />
            <img src={vacation === "Jungle" ? jungleSel : jungle} alt="Option 2"></img>
          </label>
          {' '}
          <label>
            <input
              type="radio"
              value="Beach"
              checked={vacation === "Beach"}
              onChange={(e) => setVacation("Beach")}
            />
            <img src={vacation === "Beach" ? beachSel : beach} alt="Option 3"></img>
          </label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={registerUser} value={'Register'} />
      </div>
    </div>
  )
}

export default Character