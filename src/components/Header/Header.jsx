import React from 'react'
import "./Header.scss"
import logo from "./jabu-logo.png"
const Header = () => {
  return (
    <div className='header'>
        <div className="logo">
          <img src={logo} alt=" JABU LOGO" />
        </div>
        <div className="heading">
          JABU CAMPUS MAP
        </div>
    </div>
  )
}

export default Header