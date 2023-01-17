import React from 'react'
import { Link } from 'react-router-dom'

function Button({ to, picture, name }) {
  return (
    <Link to={to} className={`left_menu__nav__nav_element`}>
      <img src={picture} alt={name} />
    </Link>
  )
}

export default Button