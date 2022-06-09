import React from 'react'
import art_logo from '../assets/images/art_logo.png'

const Header = () => {
  return (
    <header className='center'>
      <img src={art_logo} alt="logo" />
    </header>
  )
}

export default Header;